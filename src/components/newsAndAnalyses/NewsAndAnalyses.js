import { useSelector, useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useRef, useState, useEffect, useCallback } from "react";

// Styles and components
import "./NewsAndAnalysis.scss";
import Comments from "./comments/Comments";
import Container from "../container/Container";
import NewsList from "./newsList/NewsList";
import { fetchComments } from "../../firebase";

// redux actions
import {
  commentsFetching,
  commentsFetched,
  commentsFetchingError,
} from "./newsList/newsSlice";
import Loader from "../loader/Loader";

const News = () => {
  const [title, setTitle] = useState("News");
  const [newsName, setNewsName] = useState("");
  const [newsId, setNewsId] = useState("");

  const dispatch = useDispatch();
  const searchInput = useRef();

  const { news, commentsLoadingStatus } = useSelector((state) => state.news);

  const searchHandler = () => {
    console.log(searchInput.current.value);
    searchInput.current.value = "";
  };

  const getComments = useCallback(
    (id, name) => {
      dispatch(commentsFetching());
      setNewsName(name);
      setNewsId(id);
      fetchComments(id)
        .then((res) => dispatch(commentsFetched(res)))
        .catch(() => dispatch(commentsFetchingError()));
    },
    [news]
  );

  useEffect(() => {}, []);

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

      <div className="relative text-white mt-5 md:mt-10  flex flex-row gap-4">
        <div className="w-full md:w-[65%]">
          <NewsList getComments={getComments} />
        </div>

        <div className="md:w-[35%] sticky top-[5.5rem] right-0 h-[80vh] comment_hider">
          {commentsLoadingStatus === "loading" ? <Loader /> : null}
          {commentsLoadingStatus === "error" ? (
            <p>Something went wrong...</p>
          ) : null}
          {commentsLoadingStatus === "idle" && newsId.length > 0 ? (
            <Comments newsName={newsName} newsId={newsId} />
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default News;
