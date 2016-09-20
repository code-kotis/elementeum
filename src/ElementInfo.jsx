import React, { Component } from 'react';
import './ElementInfo.css';

class ElementInfo extends Component {
  render() {
    return <div className='element--info'>
        {Object.keys(this.props, elemProp => {
           return <span className={elemProp} id={elemProp}>{this.props[elemProp] || null}</span>
        })}
    </div>
  }
}

export default ElementInfo;
