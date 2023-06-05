import React from "react";
import { useTranslation } from "react-i18next";

const MainCoverLetter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="cover-letter-container">
      <img src="/images/profile.png" alt="profile" />
      <div className="cover-title">
        <h1>
          <span>{t('cover.titleSpan')}</span> {t('cover.title')}
        </h1>
        <p>
          {t('cover.subtitle')}
        </p>
      </div>
      <div className="cover-buttons">
        <button type="button" className="btn btn-gradient">
          {t('button.getInTouch')}
        </button>
        <button type="button" className="btn btn-black">
          {t('button.viewMyWorks')}
        </button>
      </div>
    </div>
  );
};

export default MainCoverLetter;
