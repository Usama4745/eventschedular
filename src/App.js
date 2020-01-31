import React, { Component } from 'react';
import './App.css';
import Schedular from './components/schedular';

class App extends Component {

  state = {
    events: [
      {
        month: "Jan",
        days:1,
        time: 1,
        event: 3,
        tasks: 1,
        color: "blue",
      },
      {
        month: "Feb",
        days:2,
        time: 3,
        event: 1,
        tasks: 1,
        color: "grey",
      },
      {
        month: "Feb",
        days:1,
        time: 2,
        event: 1,
        tasks: 1,
        color: "grey",
      },

      {
        month: "Jan",
        days:1,
        time: 4,
        event: 1,
        tasks: 1,
        color: "blue",
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Schedular events={this.state.events}></Schedular>
      </div>
    );
  }
}
export default App;
