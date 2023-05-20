import React, { Component } from 'react'
import Count from './Count';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 100
    }
  }

  add(n) {
    this.setState({ count: this.state.count + n });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>App</h1>
        <p>当前count: {count}</p>
        <Count add={(n) => this.add(n)} />
      </div>
    )
  }
}

export default App