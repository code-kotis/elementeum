import React, { Component } from 'react';
import ElementInfo from './ElementInfo';
import ScrollNavigation from './ScrollNavigation';
import Modal from './Modal';
import './App.css';
import pt from 'periodic-table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.showDetails = this.showDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showDetails() {

  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const {showModal} = this.state;
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
              <div className="element ripple" id={symbol} style={style} onClick={this.showDetails}>
                <span className="element__symbol">{symbol}</span>
                <span className="element__name">{pt.symbols[symbol].name}</span>
                <ElementInfo {...pt.symbols[symbol]}/>
              </div>
            </div>
          );
        })
      }
      </div>
      <Modal show={showModal} closeCallback={this.closeModal} />
    </div>
  }
}

export default App;
