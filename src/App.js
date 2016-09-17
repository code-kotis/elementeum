import React, { Component } from 'react';
import './App.css';
import pt from 'periodic-table';

class App extends Component {
  render() {
    return <div className='main'>
      {Object.keys(pt.elements).map(element => {
        return <div className='element' id={element}>
          {element}
        </div>
      })}
    </div>
  }
}

export default App;
