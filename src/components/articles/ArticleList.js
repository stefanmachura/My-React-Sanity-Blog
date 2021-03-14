import React, { useEffect, useState } from "react";

import ArticleHead from "./ArticleHead";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client.js";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function ArticleList() {
  const [allPostsData, setAllPosts] = useState([]);
  const { category } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" &&  categories[]->title match "${category}"]{
        _id,
        title,
        slug,
        synopsis,
        publishedAt,
        "categories": categories[] -> title,
        mainImage{
          asset->{
          url
        }
      }
    } | order(_createdAt desc)`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, [category]);

  return (
    <div className="wrapper">
      <div className="article-list">
        {allPostsData &&
          allPostsData.map((post) => {
            return (
              <ArticleHead
                key={post._id}
                title={post.title}
                slug={post.slug.current}
                synopsis={post.synopsis}
                datePosted={post.publishedAt}
                thumb={urlFor(post.mainImage.asset.url)
                  .width(200)
                  .fit("fill")
                  .url()}
              />
            );
          })}
        {allPostsData.length === 0 && <h1>{t("articles.no-posts")}</h1>}
      </div>
    </div>
  );
}
