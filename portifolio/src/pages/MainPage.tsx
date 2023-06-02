import React from "react";
import Header from "../components/Header";
import MainCoverLetter from "../components/MainCoverLetter";
import Projects from "./Projects";
import About from "./About";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainCoverLetter />
      <Projects />
      <About />
    </div>
  );
};

export default MainPage;
