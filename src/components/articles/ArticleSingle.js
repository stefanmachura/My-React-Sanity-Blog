import React, { useEffect, useState } from "react";

import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client.js";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function ArticleSingle() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
        "categories": categories[] -> title,
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading... {slug}</div>;

  const serializers = {
    types: {
      code: (props) => (
        <SyntaxHighlighter language={props.node.language} style={hybrid}>
          {props.node.code}
        </SyntaxHighlighter>
      ),
      image: (props) => (
        <img
          src={urlFor(props.node.asset._ref)}
          className="full-bleed"
          alt=""
        />
      ),
    },
  };

  return (
    <React.Fragment>
      <div className="article-wrapper article-text">
        <p className="article-title">{postData.title}</p>
        <Link
          to={"articles/" + postData.categories[0]}
          className="article-body-link"
        >
          {t("article.goback")}
        </Link>
        <img src={postData.mainImage.asset.url} className="full-bleed" />
      </div>

      <BlockContent
        className="article-wrapper article-text"
        blocks={postData.body}
        serializers={serializers}
        projectId={sanityClient.config().projectId}
        dataset={sanityClient.config().dataset}
      />
      <div className="article-wrapper article-text">
        <Link
          to={"articles/" + postData.categories[0]}
          className="article-body-link"
        >
          {t("article.goback")}
        </Link>
        <hr className="line-divider" />
        <div className="author-and-kofi">
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="author"
            className="author-img"
          />
          <h4 className="author-name">{postData.name}</h4>
        </div>
      </div>
    </React.Fragment>
  );
}
