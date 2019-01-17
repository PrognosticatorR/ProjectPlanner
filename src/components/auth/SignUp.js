import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container input-container">
        <form onSubmit={this.handleSubmit} className="white">
          <h4 className="grey-text text-darken-4">Sign Up</h4>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" id="LastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn teal">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
