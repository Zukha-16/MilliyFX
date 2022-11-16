import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import "../news/NewsAndAnalysis.scss";
import { useDispatch } from "react-redux";
import { fetchNews } from "./newsSlice";

function NewsList({ getId }) {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
    const getNews = async () => {
      setLoader(true);
      try {
        await axios.get("http://localhost:3001/news").then((data) => {
          setNews(data.data);
          setLoader(false);
        });
      } catch (error) {
        setError(error.message);
        setLoader(false);
      }
    };
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loader ? <Loader /> : null} {error ? <h1>{error}</h1> : null}
      {news ? (
        <>
          {news.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-secondaryBg py-2 px-4 rounded mb-6"
              >
                <div
                  className="mb-3 hover:cursor-pointer"
                  onClick={() => {
                    getId(item.id);
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
                    <span className="text-primaryGreen">{item.fromUser}</span>
                  </h4>
                  <span>
                    More info on{" "}
                    <a
                      href={item.source.url}
                      className="text-primaryBlue hover:animate-pulse hover:cursor-pointer"
                    >
                      {item.source.sourceName}
                    </a>
                  </span>
                  <span className="text-secondary">{item.date}</span>
                </div>
              </div>
            );
          })}
        </>
      ) : loader ? null : (
        <p>No news posted yet...</p>
      )}
    </>
  );
}

export default NewsList;
