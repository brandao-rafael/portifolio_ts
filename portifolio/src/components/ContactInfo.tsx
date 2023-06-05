import React from "react";
import {
  emailSvg,
  githubSvg,
  linkedinSvg,
  locationSvg,
  phoneSvg,
} from "../helpers/svgs";
import { useTranslation } from "react-i18next";

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-content">
      <div className="contact-description">
        <h2>
          <span>
            {t("contact.title")}
          </span>
        </h2>
        <p>
          {t("contact.subtitle")}
        </p>
      </div>
      <div className="contact-session">
        <div className="contact-item">
          <div dangerouslySetInnerHTML={{ __html: emailSvg }} />
          <p>rafaelbrandao1992@gmail.com</p>
        </div>
        <div className="contact-item">
          <div dangerouslySetInnerHTML={{ __html: phoneSvg }} />
          <p>+55 (35) 99830-3880</p>
        </div>
        <div className="contact-item">
          <div dangerouslySetInnerHTML={{ __html: locationSvg }} />
          <p>Itajubá, Minas Gerais, Brazil</p>
        </div>
				<a href="https://www.github.com/brandao-rafael" target="_blank">
					<div className="contact-item">
						<div dangerouslySetInnerHTML={{ __html: githubSvg }} />
						<p>github.com/brandao-rafael</p>
					</div>
				</a>
        <a href="https://www.linkedin.com/in/brandao-rafael/" target="_blank">
          <div className="contact-item">
            <div dangerouslySetInnerHTML={{ __html: linkedinSvg }} />
            <p>linkedin.com/in/brandao-rafael</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
