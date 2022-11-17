import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreated } from "../newsList/newsSlice";
import { v4 as uuidv4 } from "uuid";
import { postComment } from "../../../firebase";

function Comments({ newsName, newsId }) {
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.news);
  const [message, setMessage] = useState("");
  const lastMessageRed = useRef();
  const dispatch = useDispatch();

  const postCommentHandler = async () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();
    const currentDate = `${time} - ${day}/${month}/${year}`;

    if (message.length > 0) {
      postComment(
        {
          parent: newsId,
          id: uuidv4(),
          comment: message,
          date: currentDate,
          user: user.name,
        },
        uuidv4()
      )
        .then(() => {
          dispatch(
            commentCreated({
              parent: newsId,
              id: uuidv4(),
              comment: message,
              date: currentDate,
              user: user.name,
            })
          );
        })
        .then(() => setMessage(""))
        .catch((error) => console.log(error));
    } else {
      alert("Your comment must not be empty!");
    }
  };

  useEffect(() => {
    lastMessageRed.current?.scrollIntoView();
  }, [comments]);

  return (
    <div className="bg-secondaryBg h-full rounded py-2 px-4 border border-secondary">
      <div className="h-full flex flex-col justify-between items-left">
        <div >
          <h2 className="text-2xl mb-1">Comments</h2>
          <h3 className="text-base text-primaryPurple mb-4">{newsName}</h3>
        </div>
        <div className="w-full h-full overflow-scroll mb-4" ref={lastMessageRed}>
          {comments.map((item) => {
            return (
              <div className="bottom_line pb-4 w-full mb-4 " key={item.id}>
                <div className="flex flex-row justify-between text-sm mb-1 mt-4">
                  <h4 className="text-primaryGreen">{item.user}</h4>
                  <span className="text-secondaryWhite">{item.date}</span>
                </div>
                <p className="text-sm" >
                  {item.comment}{" "}
                </p>
              </div>
            );
          })}
          <p className="text-center text-sm text-secondaryWhite">
            Last comment...
          </p>
        </div>

        <div className="w-full flex flex-col items-end justify-center ">
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            className="w-full min-h-[6rem] bg-transparent border-2 border-secondary rounded p-1 outline-none focus:border-primaryBlue transition-all duration-200 ease-in-out mb-4"
            placeholder="Enter your comment here..."
          />
          <button
            className="border-2 py-1 px-4 rounded  border-secondary hover:border-primaryBlue transition-all duration-200 ease-in-out hover:text-white hover:bg-primaryBlue hover:scale-110"
            onClick={() => {
              postCommentHandler();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
