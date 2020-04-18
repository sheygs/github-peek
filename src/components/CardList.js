import React from 'react';
import Card from './Card';


const CardList = props => {
// console.log(props);
 return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      { props.profiles.map(profile => <Card key={profile.id} {...profile}/>) }
    </div>
 )
}; 

export default CardList;