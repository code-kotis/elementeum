import React, { Component } from 'react';
import './App.css';
import pt from 'periodic-table';

class App extends Component {
  render() {
    return <div>
      {Object.keys(pt.elements).map(element => {
        return <div>
          {element}
        </div>
      })}
    </div>
  }
}

export default App;
