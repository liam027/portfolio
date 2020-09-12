import React from 'react';
import PropTypes from 'prop-types';
import Owl from './Owl';
import './treeLine.scss';

class TreeLine extends React.Component {

  render() {
    return (
        <div className="tree-line" id={this.props.id}>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <img className="trees" src='fur-trees.png' alt="silhouette of fur trees"/>
            <Owl />
            <div className="block-gradient"></div>
        </div>
    )
  }
}

TreeLine.propTypes = {
  id: PropTypes.string,
}

export default TreeLine;
