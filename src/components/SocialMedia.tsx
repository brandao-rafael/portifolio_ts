import React from "react";
import { githubSvg, linkedinSvg, telegramSvg } from "../helpers/svgs";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
      <span>
        <a href="https://github.com/brandao-rafael" target="_blank">
        <div dangerouslySetInnerHTML={{ __html: githubSvg }} />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/brandao-rafael/" target="_blank">
          <div dangerouslySetInnerHTML={{ __html: linkedinSvg }} />
        </a>
      </span>
      <span>
        <a href="https://t.me/brandaoRafael92" target="_blank">
          <div dangerouslySetInnerHTML={{ __html: telegramSvg }} />
        </a>
      </span>
    </div>
  );
};

export default SocialMedia;
