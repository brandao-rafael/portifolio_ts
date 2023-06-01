import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
            <h2>Portfolio</h2>
        </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
        </nav>
        <div>
            <button type="button">Let's Talk</button>
        </div>
      </header>
    )
  }
}
