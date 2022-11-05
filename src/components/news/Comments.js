import Loader from "../loader/Loader";
import { useRef } from "react";

function Comments({ data }) {
  const textArea = useRef();

  return (
    <div className="bg-secondaryBg h-full rounded py-2 px-4">
      <div className="h-full flex flex-col justify-between items-left">
        <div>
          <h2 className="text-2xl mb-1">Comments</h2>
          <h3 className="text-sm text-primaryPurple mb-4">{data.newsName}</h3>
        </div>
        <div className="w-full h-full overflow-scroll mb-4">
          {data.comments.map((item) => {
            return (
              <div className="bottom_line pb-4 w-full mb-4 " key={item.id}>
                <div className="flex flex-row justify-between text-sm mb-1">
                  <h4 className="text-primaryGreen">{item.user}</h4>
                  <span className="text-secondaryWhite">{item.date}</span>
                </div>
                <p className="text-sm">{item.comment}</p>
              </div>
            );
          })}
          <p className="text-center text-sm text-secondaryWhite">
            Last comment...
          </p>
        </div>

        <div className="w-full flex flex-col items-end justify-center ">
          <textarea
            ref={textArea}
            className="w-full min-h-[6rem] bg-transparent border-2 border-[rgb(9,9,9)] rounded p-1 outline-none focus:border-primaryBlue transition-all duration-200 ease-in-out mb-4"
            placeholder="Enter your comment here..."
          />
          <button className="border-2 py-1 px-4 rounded  border-[rgb(9,9,9)] hover:border-primaryBlue transition-all duration-200 ease-in-out hover:text-white hover:bg-primaryBlue hover:scale-110">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
