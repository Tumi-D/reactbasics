// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Project from "./components/project";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter);
    this.setState({ counters });
  };
  handleReset = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Project
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

// function App() {
//   // render() {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <main className="container">
//         <Project
//           onReset={this.handleReset}
//           onIncrement={this.handleIncrement}
//           onDelete={this.handleDelete}
//           counters={this.state.counters}
//         />
//       </main>
//     </React.Fragment>
//   );
//   // }
// }

// export default App;
