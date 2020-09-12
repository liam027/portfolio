import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './infoBubble.scss';

class InfoBubble extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bubbleActive : false, position : {x : 0, y : 0}, content: ""}
  }

  calculate_position() {
    let EXTRA_Y_OFFSET = 5;
    let elRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    let offsetPos = {};
    offsetPos.x = this.props.origin.x - elRect.width / 2;
    offsetPos.y = this.props.origin.y - elRect.height - EXTRA_Y_OFFSET;
    return offsetPos;
  }

  componentDidMount() {
    let offsetPos = this.calculate_position();
    this.setState({position : {x: offsetPos.x, y : offsetPos.y}});
  }

  render() {
    let bubbleStyle = {
      left: this.state.position.x,
      top: this.state.position.y
    }
    return (
      <div id="info-bubble" style={bubbleStyle}>
          <div id="text-pane">
            {this.props.title && <span>{this.props.title}</span>}
            {this.props.title && <br />}
            {this.props.content}            
          </div>          
      </div>
    )
  };
}

InfoBubble.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  origin: PropTypes.object
}

export default InfoBubble;
