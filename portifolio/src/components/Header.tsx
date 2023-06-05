import React from "react";
import SocialMedia from "./SocialMedia";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div>
        <h2>Portfolio</h2>
      </div>
      <nav>
        <a href="/#">Home</a>
        <a href="/#projects">{t('navbar.projects')}</a>
        <a href="/#about">{t('navbar.about')}</a>
        <a href="/#skills">{t('navbar.skills')}</a>
        <a href="/Contact">{t('navbar.contact')}</a>
      </nav>
      <SocialMedia />
      <LanguageToggle />
    </header>
  );
};

export default Header;
