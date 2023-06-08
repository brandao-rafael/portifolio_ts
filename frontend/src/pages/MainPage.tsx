import React from "react";
import Header from "../components/Header";
import MainCoverLetter from "../components/MainCoverLetter";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainCoverLetter />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default MainPage;
