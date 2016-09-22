import React, { Component } from 'react';
import ElementInfo from './ElementInfo.jsx'
import './App.css';
import pt from 'periodic-table';

class App extends Component {
  render() {
    console.log(pt.symbols);
    return <div className="main">
    {
      Object.keys(pt.symbols).map(symbol => {
        var style = {
          background: '#' + pt.symbols[symbol].cpkHexColor
        };
        return (
          <div key={symbol}>
            <div className="element" id={symbol} style={style}>
              <span className="element__symbol">{symbol}</span>
              <span className="element__name">{pt.symbols[symbol].name}</span>
            </div>
            <ElementInfo {...pt.symbols[symbol]}/>
          </div>
        );
      })
    }
    </div>
  }
}

export default App;
