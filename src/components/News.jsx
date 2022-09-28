import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNewsContext } from "../context/newsContext";
import NewsItem from "./NewsItem";

const News = (props) => {
  const { category, pageSize } = props;
  const {
    getNews,
    articles,
    page,
    country,
    totalResults,
    initialiseNews,
    isLoading,
  } = useNewsContext();
  useEffect(() => {
    initialiseNews();
    document.title = `KB-News | ${capitailise(
      category !== "general" ? category : "home"
    )}`;
    getNews(category, pageSize, 1, country);
    // eslint-disable-next-line
  }, []);

  const nextPageNews = () => {
    getNews(category, pageSize, page + 1, country);
  };

  //   const prevPageNews = () => {
  //     getNews(category, pageSize, page - 1, country);
  //   };

  const capitailise = (word) => {
    return word.toLowerCase()[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">
        Top {category !== "general" ? capitailise(category) : ""} Headlines in
        India
      </h2>
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {isLoading || (
        <InfiniteScroll
          dataLength={articles.length}
          next={nextPageNews}
          hasMore={articles.length < totalResults}
          loader={
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
          className="overflow-hidden"
        >
          <div className="row">
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
    /* <div className="d-flex justify-content-center mb-4">
        <button disabled={page<=1} type="button" className="btn btn-primary mx-5" onClick={prevPageNews} >
          Prev
        </button>
        <button disabled={page + 1 > Math.ceil(totalResults/pageSize)} type="button" className="btn btn-primary mx-5" onClick={nextPageNews} >
          Next
        </button>
      </div> */
  );
};

export default News;
