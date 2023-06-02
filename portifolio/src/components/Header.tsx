import React from "react";

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
      <div>
        <button className="btn btn-gradient" type="button">
          Let's Talk
        </button>
      </div>
    </header>
  );
};

export default Header;
