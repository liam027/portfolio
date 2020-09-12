import React from 'react';
import PropTypes from 'prop-types';
import './celObject.scss';

class CelObject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'active': true};
  }
  render() {
    let position = {
      'left': this.props.left,
      'top': this.props.top
    }
    return (
        <div className="cel-object" style={position}>
          {this.state.active && <div className="cel-target-container">
            <div className="cel-target ct1"></div>
            <div className="cel-target ct2"></div>
            <div className="cel-target ct3"></div>
            <div className="cel-target ct4"></div>
          </div>}
          <img className="cel-image" src={this.props.imgPath} alt="a small, bright star"></img>
          {this.state.active && <span className="cel-name">{this.props.name}<span id="cel-name-cursor"></span></span>}
        </div>
    )
  }
}

CelObject.propTypes = {
  name: PropTypes.string,
  imgPath: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string
}

export default CelObject;
