import React, { Component } from 'react';
import './App.css';

class ScrollNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navigation : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  }

  render() {
    const {navigation} = this.state;
    return <div className="main__header">
      {
        navigation.map((char) => {
          return <span key={char}>{char}</span>
        })
      }
    </div>
  }
}

export default ScrollNavigation;
