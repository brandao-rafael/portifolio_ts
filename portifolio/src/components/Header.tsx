import React from "react";
import SocialMedia from "./SocialMedia";

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
    </header>
  );
};

export default Header;
