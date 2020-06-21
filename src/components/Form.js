// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Form extends Component {
 state = {
  username: ''
 }

 handleSubmit = e => {
   const { addProfile } = this.props;
   e.preventDefault();
   addProfile(this.state.username);
   this.setState({ username: ''});
 }

 handleOnChange = ({ target: { name, value } }) => {
   this.setState({ [name]: value })
 }

 render(){
   return (
     <form onSubmit={this.handleSubmit}>
       <div className="form-group">
          <input 
            type="text"
            name="username" 
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

Form.propTypes = {
  addProfile: PropTypes.func.isRequired
}

export default Form;
