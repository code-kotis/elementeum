import React, { Component } from 'react';
import './ElementInfo.css';

class ElementInfo extends Component {
  render() {
    return <div className='element--info'>
       Object.keys(this.props.info, elemProp => {
           return <span className={info} id={info}>{this.props.info[elemProp] || null}</span>
        })
    </div>
  }
}

export default ElementInfo;
