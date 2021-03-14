import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";

export default function ArticleHead(props) {
  const { slug, synopsis, title, thumb, datePosted } = props;
  return (
    <div className="article-head">
      <Link to={"/" + slug} className="article-link">
        <div className="article-body">
          <span className="article-head-timestamp">
            {moment(datePosted).format("DD/MM/YYYY, HH:mm")}
          </span>
          <span className="article-head-title">{title}</span>
          <div className="article-intro">{synopsis}</div>
        </div>
      </Link>

      <div className="article-thumb">
        <img className="article-img-thumb" src={thumb} alt="" />
      </div>
    </div>
  );
}
