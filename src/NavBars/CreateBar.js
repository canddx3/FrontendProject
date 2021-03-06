import React, {Component} from "react";
export default class CreateBar extends Component {
      render() {
      return (
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <h4 className="navbar-brand">Community Builders</h4>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="http://localhost:8080">Home</a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="http://localhost:8080/CreateEvent">
                      <span className="glyphicon glyphicon-calendar"></span>
                      Create Event
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:8080/CharityUpdate"
                      target="_self">
                      <span className="glyphicon glyphicon-log-in"></span>
                      Update Charity
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:8080/CharityDelete"
                      target="_self">
                      <span className="glyphicon glyphicon-log-in"></span>
                      Delete Charity
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }}