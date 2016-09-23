import React, { Component } from 'react';
import ElementInfo from './ElementInfo.jsx';
import ScrollNavigation from './ScrollNavigation';
import './App.css';
import pt from 'periodic-table';

class App extends Component {
  render() {
    return <div className="main">
    <ScrollNavigation />
    <div className="main__container">
      {
        Object.keys(pt.symbols).sort().map(symbol => {
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
    </div>
  }
}

export default App;
