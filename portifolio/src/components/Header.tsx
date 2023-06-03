import React from "react";
import SocialMedia from "./SocialMedia";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h2>Portfolio</h2>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#projects">Projects</a>
      </nav>
      <div className="header-btn">
        <button className="btn btn-gradient" type="button">
          Let's Talk
        </button>
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
