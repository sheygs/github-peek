import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({ profiles }) => {
 return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      { profiles.map(profile => <Card key={profile.id} {...profile}/>) }
    </div>
 )
}; 

CardList.propTypes = {
  profiles: PropTypes.array.isRequired
}

export default CardList;