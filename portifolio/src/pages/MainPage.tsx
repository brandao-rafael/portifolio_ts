import React, { Component } from 'react';
import Header from '../components/Header';
import MainCoverLetter from '../components/MainCoverLetter';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainCoverLetter />
      </div>
    )
  }
}
