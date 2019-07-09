import React from 'react';
import '../css/style.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <h1>{this.props.text}</h1>
          <button>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;