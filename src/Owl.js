import React from 'react';
import './owl.scss';

class Owl extends React.Component {

  render() {
    return (
        <div id="owl">
            <img src="owl.png" id="owl-image" alt="owl" />
            <img src="owl-eyes.png" id="owl-eyes" alt="owl eyes" /> 
        </div>
    )
  }
}

export default Owl;
