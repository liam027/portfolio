import React from 'react';
import PropTypes from 'prop-types';
import './project.scss';

class Project extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { isOpen: false}
  }

  open(){
    this.setState({isOpen : true});
  }

  close() {
    this.setState({isOpen : false});
  }

  render() {
    return (
      <div className="project-frame">
          <div className="project-name title">
            <a href={this.props.projLink} target="_blank" rel="noopener noreferrer">{this.props.title}</a>
          </div>
          <div className="ref-container">
            {this.props.techs_used.map((obj, index) => 
              <div style={{display: "inline-block"}} key={index}>
                {obj} 
              </div>
            )} 
          </div>
          {this.props.img}
          <nav className="ref-container">
            {this.props.links.map((obj, index) => 
              <div style={{display: "inline-block"}} key={index}>
                {obj} 
              </div>
            )} 
          </nav>
          <div className="project-flex-container">
            <article className="project-description">
              {this.state.isOpen ? 
              <span><span className="short-description">{this.props.shortDescription}</span><span className="more-description">{this.props.moreDescription}</span></span> :
              <span className="short-description">{this.props.shortDescription}</span>}
            </article>
          </div>
          {this.state.isOpen ?
            <div className="arrow-container" onClick={this.close.bind(this)}>
              <img src="down-arrow.png" alt="an up arrow" className="arrow flip"  />
            </div> :
            <div className="arrow-container" onClick={this.open.bind(this)}>
              <div className="learn-more">Learn more</div>
              <img src="down-arrow.png" alt="a down arrow" className="arrow" />
            </div>
          }
      </div>
    )
  }
}

Project.propTypes = {
    title: PropTypes.string,
    projLink: PropTypes.string,
    techs_used: PropTypes.array,
    links: PropTypes.array
}

export default Project;


