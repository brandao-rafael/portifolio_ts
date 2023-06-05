import React from "react";
import SocialMedia from "./SocialMedia";
import LanguageToggle from "./LanguageToggle";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h2>Portfolio</h2>
      </div>
      <nav>
        <a href="/#">Home</a>
        <a href="/#projects">Projects</a>
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/Contact">Contact</a>
      </nav>
      <SocialMedia />
      <LanguageToggle />
    </header>
  );
};

export default Header;
