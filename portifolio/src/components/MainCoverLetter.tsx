import React, { Component } from 'react';
import Image from 'next/image';

export default class MainCoverLetter extends Component {
  render() {
    return (
      <div>
        <h1>
            <span>Hi, I'm Rafael,</span> Fullstack Web Developer, from Brazil.
        </h1>
        <p>
            A Fullstack Web Developer, based in Brazil. I have a passion for development and love to create for web and mobile devices.
        </p>
        <div>
            <button type="button">Know more</button>
            <button type="button">View my works</button>
        </div>
        <div>
            <img src="/images/profile.png" alt="" width={300} />
        </div>
      </div>
    )
  }
}
