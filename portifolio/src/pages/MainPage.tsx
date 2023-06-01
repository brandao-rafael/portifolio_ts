import React, { Component } from "react";
import Header from "../components/Header";
import MainCoverLetter from "../components/MainCoverLetter";
import Projects from "./Projects";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainCoverLetter />
        <Projects />
      </div>
    );
  }
}
