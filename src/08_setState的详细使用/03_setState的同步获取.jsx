import React, { Component } from 'react';
import { flushSync } from "react-dom";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'hello world',
      count: 0
    }
  }

  changeText() {
    flushSync(() => {
      this.setState({ message: 'hello react' });
    })
    console.log(this.state.message);
  }

  add() {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    });
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    });
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    });
  }

  render() {
    const { message, count } = this.state;
    return (
      <div>
        <h1>setState的详细使用</h1>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>更改文本</button>
        <p>当前计数：{count}</p>
        <button onClick={() => this.add()}>+1</button>
      </div>
    )
  }
}

export default App