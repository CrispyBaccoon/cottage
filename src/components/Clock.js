import { Component } from "react";
import React from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.Update(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  Update() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="Clock">
        <p>{this.state.date.toLocaleTimeString().toLocaleLowerCase()}</p>
      </div>
    );
  }
}
