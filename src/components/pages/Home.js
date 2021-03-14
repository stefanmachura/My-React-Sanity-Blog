import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import ArticleHead from "./../articles/ArticleHead";
import sanityClient from "../../client.js";

export default function Home() {
  const { t } = useTranslation();
  const [firstPost, setFirstPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        _id,
        title,
        slug,
        synopsis,
        publishedAt,
        mainImage{
          asset->{
          url
        }
      }
    } | order(_createdAt desc) [0]`
      )
      .then((data) => setFirstPost(data))
      .catch(console.error);
  }, []);
  return (
    <div className="article-wrapper">
      <h1 className="home-header">{t("home.title")}</h1>
      {firstPost && (
        <ArticleHead
          key={firstPost._id}
          title={firstPost.title}
          slug={firstPost.slug.current}
          synopsis={firstPost.synopsis}
          datePosted={firstPost.publishedAt}
          thumb={firstPost.mainImage.asset.url}
        />
      )}
      <h1 className="home-header">{t("home.newsHeader")}</h1>
      <p>
        <Trans i18nKey="home.news"></Trans>
      </p>
      <h1 className="home-header">{t("home.ww")}</h1>
      <div class="recommended-grid">
        <div class="recommended-block">
          <h3 className="home-linklist-header">{t("home.programming")}</h3>
          <ul className="home-link-list">
            <li>
              <a href="https://www.jeffgeerling.com/">Jeff Geerling</a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/TechGuyWeb">
                Brad Traversy
              </a>
            </li>
            <li>
              <a href="https://pythonprogramming.net/">sentdex</a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/Computerphile">
                Computerphile
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCbiGcwDWZjz05njNPrJU7jA">
                Explaining Computers
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/TechWorldwithNana">
                TechWorld with Nana
              </a>
            </li>
          </ul>
        </div>
        <div class="recommended-block">
          <h3 className="home-linklist-header">{t("home.photo")}</h3>
          <ul className="home-link-list">
            <li>
              <a href="https://hiperrealizm.blogspot.com/">Wojciech Wilczyk</a>
            </li>
            <li>
              <a href="https://obrazowyterroryzm.blogspot.com/">
                Wojciech Sienkiewicz
              </a>
            </li>
            <li>
              <a href="https://pawelstarzec.com/">Paweł Starzec</a>
            </li>
            <li>
              <a href="https://pawelstarzec.com/">Adam Wilkoszarski</a>
            </li>
            <li>
              <a href="https://www.alecsoth.com/photography/">Alec Soth</a>
            </li>
            <li>
              <a href="https://www.bryanschutmaat.co/">Bryan Schutmaat</a>
            </li>
          </ul>
        </div>
        <div class="recommended-block">
          <h3 className="home-linklist-header">{t("home.podcasts")}</h3>
          <ul className="home-link-list">
            <li>
              <a href="https://www.flightradar24.com/blog/avtalk-podcast/">
                AvTalk
              </a>
            </li>
            <li>
              <a href="https://syntax.fm/">Syntax.fm</a>
            </li>
            <li>
              <a href="https://www.codingblocks.net/category/podcast/">
                Coding Blocks
              </a>
            </li>
            <li>
              <a href="https://ourludicrousfuture.com/">Our Ludicrous Future</a>
            </li>
            <li>
              <a href="https://open.spotify.com/show/62HlRCGnRnUENPPOfGYdyY">
                Piątki po deployu (pl)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
