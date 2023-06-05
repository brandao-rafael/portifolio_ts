import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const MainCoverLetter: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

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
        <button
          type="button"
          className="btn btn-gradient"
          onClick={() => router.push("/Contact")}
        >
          {t('button.getInTouch')}
        </button>
        <button
          type="button"
          className="btn btn-black"
          onClick={() => router.push("/#projects")}
        >
          {t('button.viewMyWorks')}
        </button>
      </div>
    </div>
  );
};

export default MainCoverLetter;
