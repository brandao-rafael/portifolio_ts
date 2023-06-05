import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container container" id="about">
      <div className="about-header">
        <h3>
          <span>Rafael Brandão</span>
        </h3>
        <h2>{t("about.title")}</h2>
      </div>
      <div className="about-content">
        <div>
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
        </div>
        <div>
          <p>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
