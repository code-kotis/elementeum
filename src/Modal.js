import React, { Component } from 'react';

class Modal extends Component {
  static defaultProps = {
    show: false
  }

  render() {
    const {show, closeCallback} = this.props;
    const modalClassName = show ? "modal show": "modal";
    const containerClassName = show ? "modal__container show": "modal__container";
    return <div className={modalClassName}>
      <div className="modal__overlay" onClick={closeCallback}></div>
      <div className={containerClassName}>
        {this.props.children}  
      </div>
    </div>
  }
}

export default Modal;
