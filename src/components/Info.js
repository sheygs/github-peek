import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ name, company }) => {
 return (
  <div style={{ color: '#2e2c2c', fontSize: '15px'}}>
     <div className="name">{name}</div>
     <div className="company">{company}</div>
  </div>
 )
};

Info.propTypes = {
   name: PropTypes.string.isRequired,
   company: PropTypes.string
}


export default Info;