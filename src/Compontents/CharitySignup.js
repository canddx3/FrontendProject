import React, { Component } from "react";

import NavBar from "../NavBars/NavBar";
import UserService from "../service/UserService";

class CharitySignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      charityTitle: "",
      charityName: "",
      charityCat: "",
      charityAddress: "",
      charityPhone: "",
    };
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      charityTitle: this.state.charityTitle,
      charityName: this.state.charityName,
      charityCat: this.state.charityCat,
      charityAddress: this.state.charityAddress,
      charityPhone: this.state.charityPhone,
    };

    UserService.addUser(user)
      .then((res) => {
        this.setState({ message: "User added successfully." });
        this.props.history.push("/CharityProfile");
      })
      .catch((err) => console.log(err));
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <NavBar />
        <h2 className="container">Charity Signup</h2>
        <form>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Charity Name:</label>
            <input
              type="text"
              name="charityName"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Charity Category:</label>
            <input
              type="text"
              name="charityCat"
              value={this.state.value}
              onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Charity Address:</label>
            <input
              type="text"
              name="charityAddress"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Charity Phone:</label>
            <input
              type="text"
              name="charityPhone"
              value={this.state.value}
              onChange={this.onChange} />
          </div>
          <button className="btn btn-success" onClick={this.saveUser}>
            Create My Account
          </button>
        </form>
      </div>
    );
  }
}

export default CharitySignup;
