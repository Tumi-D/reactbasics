import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary btn-sm mb-2"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm ml-2 mb-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge mr-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
