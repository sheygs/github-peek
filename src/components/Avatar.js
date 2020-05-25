import React from 'react';
import PropTypes from 'prop-types';

const Avatar = props => {
 return (
   <img style={{ width: '100%'}} 
     src={props.avatar} 
     alt={props.alt}
   />
 )
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Avatar;