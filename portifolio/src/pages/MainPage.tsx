import React, { Component } from "react";
import Header from "../components/Header";
import MainCoverLetter from "../components/MainCoverLetter";
import ProjectCard from "../components/ProjectCard";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainCoverLetter />
        <ProjectCard
          title="Trybe Tunes"
          url="https://brandao-rafael.github.io/trybe-tunes/"
          img="https://github.com/brandao-rafael/trybe-tunes/blob/main/images/print/Captura%20de%20tela%20de%202022-10-25%2010-01-03.png?raw=true"
          description="Trybe Tunes is a music player that consumes the iTunes API. It was developed using React and Redux."
        />
      </div>
    );
  }
}
