import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleToggle = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return <button className="btn btn-black" onClick={handleToggle}>
		<p>
			{i18n.language === "en" ? "🇧🇷" : "🇺🇸"}
			{t('button.toggle')}
		</p>
		</button>;
};

export default LanguageToggle;