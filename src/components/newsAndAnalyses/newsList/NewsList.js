import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsFetching, newsFetched, newsFetchingError } from "./newsSlice";
import { fetchDataFromFirestore } from "../../../firebase";
import Loader from "../../loader/Loader";

function NewsList({ getComments }) {
  const dispatch = useDispatch();
  const { news, newsLoadingStatus } = useSelector((state) => state.news);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(newsFetching());
    fetchDataFromFirestore("news")
      .then((res) => {
        dispatch(newsFetched([...res]));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(newsFetchingError());
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {newsLoadingStatus === "loading" ? <Loader /> : null}
      {newsLoadingStatus === "error" ? <p>Something went wrong...</p> : null}
      {news.length > 0 ? (
        <>
          {news.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-secondaryBg py-2 px-4 rounded mb-6 border border-secondary"
              >
                <div
                  className="mb-3 hover:cursor-pointer"
                  onClick={() => {
                    getComments(item.id, item.newsName);
                  }}
                >
                  <h2 className="text-2xl mb-3 text-primaryPurple">
                    {item.newsName}
                  </h2>
                  <p className="">{item.content}</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-base">
                  <h4>
                    Posted by{" "}
                    <span className="text-primaryGreen">{item.postedBy}</span>
                  </h4>
                  <span>
                    More info on{" "}
                    <a
                      href={item.url}
                      className="text-primaryBlue hover:animate-pulse hover:cursor-pointer"
                    >
                      {item.urlName}
                    </a>
                  </span>
                  <span className="text-secondary">{item.date}</span>
                </div>
              </div>
            );
          })}
        </>
      ) : news.length === 0 && newsLoadingStatus === "idle" ? (
        <p>No news posted yet...</p>
      ) : null}
    </>
  );
}

export default NewsList;
