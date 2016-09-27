import React, { Component } from 'react';
import pt from 'periodic-table';

class Modal extends Component {
  static defaultProps = {
    elementInfo: "",
    show: false
  }

  render() {
    const {elementInfo, closeCallback, show} = this.props;
    const element = pt.symbols[elementInfo];
    const modalClassName = show ? "modal show": "modal hide";
    const containerClassName = show ? "modal__container show": "modal__container hide";

    return <div className={modalClassName}>
      <div className="modal__overlay" onClick={closeCallback}></div>
      <div className={containerClassName}>
        {
          show && <div className="modal__content-container">
            <div className="modal__content">
              <div className="modal__element-symbol">
                <p>{element && element.atomicNumber}</p>
                <p>{element && element.symbol}</p>
              </div>
              <div className="modal__element-info">
                <p>{element && element.name}</p>
                {
                  element && <span><b>Boiling Point:</b> {element.boilingPoint}</span>
                }
                {
                  element && <span><b>Density:</b> {element.density}</span>
                }
              </div>
            </div>
            <div className="modal__content-details">
              <div>{element.symbol}</div>
            </div>
          </div>
        }
      </div>
    </div>
  }
}

export default Modal;
