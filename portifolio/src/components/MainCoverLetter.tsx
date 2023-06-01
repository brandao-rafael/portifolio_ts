import React, { Component } from "react";

export default class MainCoverLetter extends Component {
  render() {
    return (
      <div className="cover-letter-container">
        <img src="/images/profile.png" alt="profile" />
        <div className="cover-title">
          <h1>
            <span>Hi, I'm Rafael,</span> Fullstack Web Developer, from Brazil.
          </h1>
          <p>
            A Fullstack Web Developer, based in Brazil. I have a passion for
            development and love to create for web and mobile devices.
          </p>
        </div>
        <div className="cover-buttons">
          <button type="button" className="btn btn-gradient">
            Know more
          </button>
          <button type="button" className="btn btn-black">
            View my works
          </button>
        </div>
      </div>
    );
  }
}
