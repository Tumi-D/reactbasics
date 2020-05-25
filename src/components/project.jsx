import React, { Component } from "react";
import Counter from "./counter";
class Project extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm ml-5 mb-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
          />
        ))}
      </div>
    );
  }
}

export default Project;
