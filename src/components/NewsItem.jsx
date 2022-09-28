import React from "react";

const NewsItem = (props) => {
    const {url, urlToImage, title, description} = props.article;
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={urlToImage?urlToImage:"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
