import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Info from './Info';

class Card extends Component {
  getStyles() {
   return  {
      margin: '1rem', 
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
      maxWidth: '200px', 
      textAlign: 'center',
    }
  }
  render() {
  const { avatar_url, name, company } = this.props;  
  return (
      <div style={this.getStyles()}>
          <Avatar avatar={avatar_url} alt={name}/>
          <Info name={name} company={company}/>
      </div>
    )
  }
}

Card.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
}

export default Card;