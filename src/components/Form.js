// eslint-disable-next-line
import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';

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
       <div className="form-group">
          <input 
            type="text" 
            placeholder="search user..." 
            required
            onChange={this.handleOnChange}
            value={this.state.username}
          /> 
          <button>Add User</button>
       </div>
     </form>
   )
 }
}

export default Form;