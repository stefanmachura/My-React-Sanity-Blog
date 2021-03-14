import { Trans, useTranslation } from "react-i18next";

import React from "react";
import arrows from "../../imgs/antifa.png";
import me from "../../imgs/me.jpeg";
import strajk from "../../imgs/strajk.png";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="article-wrapper">
      <h1>{t("about.header")}</h1>
      <img className="about-img" src={me} alt="" />
      <p>
        <Trans i18nKey="about.me"></Trans>
      </p>
      <div className="about-images">
        <img className="about-img" src={arrows} alt="three arrows" />
        <img className="about-img" src={strajk} alt="three arrows" />
      </div>
      <a href="https://ko-fi.com/G2G51UH0T" target="_blank" rel="noreferrer">
        <img
          className="kofi-img"
          src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
      <iframe
        src="https://discord.com/widget?id=802493640441069568&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
