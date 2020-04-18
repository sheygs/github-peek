import React, { Component } from 'react';
import Avatar from './Avatar';
import Info from './Info';

class Card extends Component {
  render() {
    // console.log(this.props);
    const { avatar_url, name, company } = this.props;

    const styles = {
       margin: '1rem', 
       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
       maxWidth: '200px', 
       textAlign: 'center'
    }

    return (
      <div style={styles}>
          <Avatar avatar={avatar_url} alt={name}/>
          <Info name={name} company={company}/>
      </div>
    )
  }
}

export default Card;