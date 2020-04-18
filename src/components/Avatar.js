import React from 'react';


const Avatar = props => {
 return (
   <img style={{ width: '100%'}} 
     src={props.avatar} 
     alt={props.alt}
   />
 )
};

export default Avatar;