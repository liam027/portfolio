import React from 'react';
import PropTypes from 'prop-types';
import './section.scss';

class Section extends React.Component {
  
  render() {
    return (
      <section id={this.props.id} className="section">
      <div className="section-title-frame">
        <div className="section-title-trim-front"></div>
        <span className="section-title-text title">{this.props.title}</span>
      </div>
      <div className="section-content">
        {this.props.content}
      </div>
    </section>
    )
  };
}

Section.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}

export default Section;
