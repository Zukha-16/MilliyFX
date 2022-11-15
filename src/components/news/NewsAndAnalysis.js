import Container from "../container/Container";
import { BsSearch } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewsContent from "../newsList/NewsList";
import "./NewsAndAnalysis.scss";
import Comments from "../comments/Comments";

const News = () => {
  const [title, setTitle] = useState("News");
  const [comments, setComments] = useState(null);
  const navigate = useNavigate();

  const getId = async (id) => {
    await axios.get(`http://localhost:3001/news/${id}`).then((data) => {
      setComments(data.data);
    });
    if (window.innerWidth < 768) {
      navigate("comments");
    } else {
      return;
    }
  };

  const searchInput = useRef();
  const searchHandler = () => {
    console.log(searchInput.current.value);
    searchInput.current.value = "";
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div className="text-white mt-32 flex flex-col gap-4 md:flex-row md:justify-around md:w-full">
        <div className="order-2 bg-[rgb(22,22,22)] rounded-full flex justify-between p-[3px] gap-1 md:order-1 md:w-[60%] max-w-[620px] ">
          <input
            ref={searchInput}
            type="text"
            className="w-[85%] rounded-l-full bg-[rgb(9,9,9)] py-1 px-4 outline-none focus:outline-none focus:bg-[rgb(15,15,15)] transition-all duration-300 ease-in-out text-lg "
            placeholder="Search"
          />{" "}
          <button
            className="w-[15%] hover:bg-[rgb(9,9,9)] transition-all duration-300 ease-in-out rounded-r-full"
            type="button"
            onClick={() => {
              searchHandler();
            }}
          >
            <BsSearch className="m-auto" size={20} />
          </button>
        </div>

        <div className="order-1 md:order-2 md:w-[30%] flex justify-center gap-8">
          <button
            className="bg-[rgb(22,22,22)] py-2 px-4 rounded-lg hover:bg-[rgb(45,45,45)] hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out text-xl"
            type="button"
            onClick={() => setTitle("News")}
          >
            News
          </button>
          <button
            className="bg-[rgb(22,22,22)] py-2 px-4 rounded-lg hover:bg-[rgb(45,45,45)] hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out text-xl"
            type="button"
            onClick={() => setTitle("Analysis")}
          >
            Analysis
          </button>
        </div>
      </div>
      <h1 className="text-center text-3xl text-white mt-10 md:mt-20">
        {title}
      </h1>

      <div className="relative text-white h-[150vh] mt-5 md:mt-10  flex flex-row gap-4">
        <div className="w-full md:w-[65%]">
          <NewsContent getId={getId} />
        </div>

        <div className="md:w-[35%] sticky top-[5.5rem] right-0 h-[80vh] comment_hider">
          {comments ? <Comments data={comments} /> : null}
        </div>
      </div>

      <div className="h-screen"></div>
    </Container>
  );
};

export default News;
