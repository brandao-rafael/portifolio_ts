import React from "react";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media">
      <span>
        <a href="https://github.com/brandao-rafael" target="_blank">
          <img src="/images/gh-logo.png" alt="github" />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/brandao-rafael/" target="_blank">
          <img src="/images/linkedin-logo-b.png" alt="linkedin" />
        </a>
      </span>
      <span>
        <a href="https://t.me/brandaoRafael92" target="_blank">
          <img src="/images/telegram-logo.png" alt="instagram" />
        </a>
      </span>
    </div>
  );
};

export default SocialMedia;
