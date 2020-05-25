/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      profiles: []
    }
  }

  addProfile = profile => {
    this.setState(previousState => ({
       profiles: [...previousState.profiles, profile]
    }));
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
      <Form onSubmit={this.addProfile}/>
      <CardList profiles={this.state.profiles}/>
     </div>
    );
  }
}

export default App;
