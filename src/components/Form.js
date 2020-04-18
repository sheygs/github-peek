// eslint-disable-next-line
import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
 state = {
  username: ''
 }

 handleSubmit = async e => {
  e.preventDefault();
  const res = await axios.get(`https://api.github.com/users/${this.state.username}`);
   this.props.onSubmit(res.data);
   this.setState({ username: ''});
 }

 handleOnChange = e => {
   this.setState({ username: e.target.value })
 }

 render(){
   return (
     <form onSubmit={this.handleSubmit}>
      <input 
         type="text" 
         placeholder="gitHub username" 
         required
         onChange={this.handleOnChange}
         value={this.state.username}
      /> 
      <button>Add Card</button>
     </form>
   )
 }
}

export default Form;