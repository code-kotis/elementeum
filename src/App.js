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
      elementInfo: "",
      showModal: false
    };
    this.showDetails = this.showDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showDetails(event) {
    console.log(event.currentTarget.dataset);
    this.setState({
      elementInfo: event.currentTarget.dataset.elementInfo,
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const {elementInfo, showModal} = this.state;
    return <div className="main">
    <ScrollNavigation />
    <div className="main__container">
      {
        Object.keys(pt.symbols).sort().map(symbol => {
          var symbolName = symbol;
          var id = symbolName.slice(0, 1);
          console.log(symbol);
          var style = {
            background: '#' + pt.symbols[symbol].cpkHexColor
          };
          return (
            <div key={symbol} data-element-info={symbol} id={id} onClick={this.showDetails}>
              <div className="element" style={style}>
                <span className="element__symbol">{symbol}</span>
                <span className="element__name">{pt.symbols[symbol].name}</span>
                <ElementInfo {...pt.symbols[symbol]}/>
              </div>
            </div>
          );
        })
      }
      </div>
      <Modal closeCallback={this.closeModal} elementInfo={elementInfo} show={showModal} />
    </div>
  }
}

export default App;
