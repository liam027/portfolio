import React from 'react';
import CelObject from './CelObject';

class SkyAnimationHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentAnimIndex : 0};
    this.lastAnimPlayedIndex = null;
    this.celObjects=[
      <CelObject key="polaris" name="POLARIS" imgPath="star.png" left="50%" top="5%" />,
      <CelObject key="sirius" name="SIRIUS" imgPath="star.png" left="15%" top="50%" />,
      <CelObject key="venus" name="VENUS" imgPath="star.png" left="25%" top="65%" />,
      <CelObject key="vega" name="VEGA" imgPath="star.png" left="80%" top="60%" />,
      <CelObject key="pollux" name="POLLUX" imgPath="star.png" left="60%" top="5%" />,
      <CelObject key="ankaa" name="ANKAA" imgPath="star.png" left="20%" top="70%" />
    ];
  }

  componentDidMount() {
    this.start_animation_timer();
  }

  render() {
    return (this.celObjects[this.state.currentAnimIndex]);
  }

  start_animation_timer() {
    let ANIMATION_TIME = 10000; //10 seconds
    window.setInterval(this.get_next_animation.bind(this), ANIMATION_TIME);
  }

  get_next_animation() {
    let newIndex = this.state.currentAnimIndex + 1;
    //check if new index is out of bounds and return to 0 if so
    if(newIndex > (this.celObjects.length - 1)) {
      this.setState({currentAnimIndex: 0})
    }
    else {
      this.setState({currentAnimIndex: newIndex})
    }
  }

  get_random_animation() {
    //get the index of a random animation in the array of celObjects
    let animIndex = Math.floor(Math.random() * this.celObjects.length);
    //check if its the same as the last one played and if so try again
    if(this.state.currentAnimIndex === animIndex){
      this.change_animation();
    }
    else {
      this.setState({currentAnimIndex : animIndex});
    }
  }
}

export default SkyAnimationHandler;
