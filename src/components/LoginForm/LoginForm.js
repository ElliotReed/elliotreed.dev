import React from 'react';
import './LoginForm.css';
import API from '../../utility/API';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    retypePassword: "",
    errorMessage: ""
  }

newUser = () => {
  const userData = {
    "username": this.state.username,
    "password": this.state.password,
    "email": this.state.email
  }
  API.createUser(userData);
};

handleInputChange = event => {
  // Get the name and the value of the input that triggered the event
  let value = event.target.value;
  const name = event.target.name;

  this.setState({
    [name]: value
  });
}

handleFormSubmit = event => {
  event.preventDefault();
  this.newUser();

  this.setState({
    username: "",
    password: "",
    email: "",
    retypePassword: ""
  });

}

  render() {
  return (
    <div className="login">
      <form name='form-login'>
        <span className="fontawesome-user">
          {/* <FontAwesomeIcon icon="user" /> */}
        </span>
        <input 
          type="text" 
          id="user" 
          placeholder="Username"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
          />
       
        <span className="fontawesome-lock">
          {/* <FontAwesomeIcon icon="lock" /> */}

        </span>
        <input
          type="password" 
          id="pass" 
          placeholder="Password"
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
        />
       
        <input 
          type="password" 
          id="repass" 
          placeholder="Retype Password"
          value={this.state.retypePassword}
          name="retypePassword"
          onChange={this.handleInputChange}
        />
        
        <span className="fontawesome-envelope">
          {/* <FontAwesomeIcon icon="envelope" /> */}

        </span>
        <input 
          type="email" 
          id="email" 
          placeholder="Email"
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          />

        <input 
          type="submit" 
          value="Login" 
          onClick={this.handleFormSubmit}
        />
      </form>
    </div>

  );
};
}
export default LoginForm;
