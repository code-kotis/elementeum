import React, { Component } from 'react';
import pt from 'periodic-table';
import './App.css';

class ScrollNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navigation : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    };

    console.log(pt);
  }

  handleScroll(event) {
    var currentElement = event.currentTarget;
    var currentWidth = currentElement.scrollWidth - currentElement.clientWidth;

    console.log(currentElement);
    console.log(currentWidth);
  }

  render() {
    const {navigation} = this.state;
    return <div className="main__header" onScroll={this.handleScroll}>
      {
        navigation.map((char) => {
          return <a href={"#" + char} key={char}>{char}</a>
        })
      }

      <div></div>
    </div>
  }
}

export default ScrollNavigation;
