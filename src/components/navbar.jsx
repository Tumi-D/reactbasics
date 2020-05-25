import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Starter{" "}
          <span className="badge badge-sm badge-success">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}
