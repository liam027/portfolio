import React from 'react';
import PropTypes from 'prop-types';
import InfoBubble from './InfoBubble';
import './infoTip.scss';

//mouse clicks anywhere will close the current info tip
document.onclick = function() {
  if(InfoTip.currentOpenTip) {
    InfoTip.currentOpenTip.pop_bubble();
  }
}
class InfoTip extends React.Component {
  
  static currentOpenTip = "";

  constructor(props) {
    super(props);
    this.bubble = React.createRef();
    this.state = {bubbleActive: false, origin : {x : 0, y : 0}};
  }

  blow_bubble(e) {
    if(InfoTip.currentOpenTip) {
      InfoTip.currentOpenTip.pop_bubble();
    }
    let originObj = this.calculate_origin(e);
    this.setState({bubbleActive: true, origin: originObj});
    InfoTip.currentOpenTip = this; //assign this tip as the current open tip
  }

  pop_bubble() {
    this.setState({bubbleActive: false});
  }

  listen_for_close() {
    document.onclick = function() {
      //pop bubble and stop listening
      InfoTip.currentOpenTip.pop_bubble();
    }
  }

  calculate_origin(e) {
    //set origin to the center-top of the infotip element.
    let origin = {};
    let target = e.target.getBoundingClientRect();
    origin.x = target.x + target.width / 2;
    origin.y = target.y + document.documentElement.scrollTop;
    return origin;
  }

  render() {
    if(this.state.bubbleActive) {
      //bubble active
      if(this.props.text) {
        return this.text_with_bubble();
      }
      else {
        return this.image_with_bubble();
      }
    }
    else {
      //bubble not active
      if(this.props.text) {
        return this.text_without_bubble();
      }
      else {
        return this.image_without_bubble();
      }   
    }
  }

  text_with_bubble() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <span className="info-tip"
              onClick={this.blow_bubble.bind(this)}
              onMouseLeave={this.pop_bubble.bind(this)}
        >{this.props.text}
        <InfoBubble ref={this.bubble} title={this.props.title} content={this.props.content} origin={this.state.origin} />
        </span>
      </a>
    )
  }

  text_without_bubble() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <span className="info-tip"
              onClick={this.blow_bubble.bind(this)}
              onMouseEnter={this.blow_bubble.bind(this)}
        >{this.props.text}
        </span>
      </a>
    )
  }

  image_with_bubble() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img  className='icon info-tip'
              onClick={this.blow_bubble.bind(this)}
              onMouseLeave={this.pop_bubble.bind(this)}
              src={this.props.img} 
              alt={this.props.img} >
        </img>
        <InfoBubble ref={this.bubble} title={this.props.title} content={this.props.content} origin={this.state.origin} />
      </a>
    )
  }

  image_without_bubble() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img  className='icon info-tip'
              onClick={this.blow_bubble.bind(this)}
              onMouseEnter={this.blow_bubble.bind(this)}
              src={this.props.img} 
              alt={this.props.img} >
        </img>
      </a>
    )
  }

}

InfoTip.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}

export default InfoTip;
