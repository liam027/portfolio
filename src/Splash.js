import React from 'react';
import InfoTip from './InfoTip';
import './splash.scss';

class Splash extends React.Component {

  render() {
    return (
    <div id="splash-container">
        <div id="splash">
          <div id="name" className="title">LIAM HARLAND</div>
          <div id="sub-name" className="title">PORTFOLIO</div>
          <div id="logo-container">
              <img id="main-logo" src="logo.png" alt="A grey logo showing jagged lines, like mountains or a radio wave."/>
          </div>
          <div className="ref-container">
              <InfoTip img="github.png" alt="github logo" content="Click to see my code on GitHub." link="https://github.com/liam027?tab=repositories" />
          </div>
          <nav>
            <a href="#aboutme-scroll-target" className="splash-link title">ABOUT ME</a>
            <a href="#projects-scroll-target" className="splash-link title">PROJECTS</a>
            <a href="#skills-scroll-target" className="splash-link title">SKILLS</a>
            <a href="#contact-scroll-target" className="splash-link title">CONTACT</a>
          </nav>
          {
          //<span className="splash-link title" id="info-tips-help">This site has  info tips <InfoTip text="that you can hover over or touch" content="Yeah, like that!" /> for more information.</span>
          }
          <div id="splash-arrow-container">
            <a href="#aboutme-scroll-target" className="ref-link">
              <img src="down-arrow.png" alt="arrow pointing down the page" className="arrow" />
            </a>
          </div>
        </div>
      </div>
    )
  };
}

export default Splash;




