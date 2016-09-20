import React, { Component } from 'react';
import ElementInfo from './ElementInfo.jsx'
import './App.css';
import pt from 'periodic-table';

class App extends Component {
  render() {
    return <div className='main'>
      {Object.keys(pt.elements).map(element => {
        return (
           <div>
            <div className='element' id={element}> {element} </div>
            <ElementInfo {...pt.elements[element]}/>
           </div>
        );
      })}
    </div>
  }
}

export default App;
