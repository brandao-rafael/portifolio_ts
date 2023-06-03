import React from "react";
import {
  emailSvg,
  githubSvg,
  linkedinSvg,
  locationSvg,
  phoneSvg,
} from "../helpers/svgs";

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-title-content">
      <h2>
        <span>
          Get in touch <br />
        </span>
      </h2>
      <div className="contact-description">
        <p>
          Have a project in mind? Looking for a developer to your team? Want to
          know more about me? Feel free to contact me in one of the channels
          below or reach out throught form and I will get back to you as soon as
          possible.
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
        <div className="contact-item">
          <div dangerouslySetInnerHTML={{ __html: githubSvg }} />
          <p>github.com/brandao-rafael</p>
        </div>
        <div className="contact-item">
          <div dangerouslySetInnerHTML={{ __html: linkedinSvg }} />
          <p>linkedin.com/in/brandao-rafael</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
