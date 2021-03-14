import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <span class="footer-left">
        <a href="https://discord.gg/QmRybqHp2p">{t("footer.invite")}</a>
      </span>
      <span class="footer-right">
        <i className="far fa-copyright"></i> Stefan Machura 2020
      </span>
    </div>
  );
}
