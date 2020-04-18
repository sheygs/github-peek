import React from 'react';

const Info = props => {
 return (
  <div style={{ color: 'grey', fontSize: '15px'}}>
     <div className="name">{props.name}</div>
     <div className="company">{props.company}</div>
  </div>
 )
};

export default Info;