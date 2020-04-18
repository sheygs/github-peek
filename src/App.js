/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
//import testData from './data/testData';

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

  render(){
    const styles = { textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold'}
    return (
     <div className="App"> 
      <h2 style={styles}>{this.props.title}</h2>
      <Form onSubmit={this.addProfile}/>
      <CardList profiles={this.state.profiles}/>
     </div>
    );
  }
}

export default App;
