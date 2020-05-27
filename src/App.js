/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      profiles: []
    }
  }

  addProfile = async profile => {
    try {
      const user = await axios.get(`https://api.github.com/users/${profile}`);
        this.setState(previousState => ({
          profiles: [...previousState.profiles, user.data]
        }));
    } catch({ message }) {
      console.error(message);
    } 
  }

  addStyles() {
    return {
      textAlign: 'center', 
      fontSize: '1.5rem', 
      fontWeight: 'bold', 
      color: '#ddd'
    }
  }

  render(){
    const { title } = this.props;
    return (
     <div className="App"> 
      <h1 style={this.addStyles()}>{title}</h1>
      <Form addProfile={this.addProfile}/>
      <CardList profiles={this.state.profiles}/>
     </div>
    );
  }
}

export default App;
