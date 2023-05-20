import React, { Component } from 'react'

export class Count extends Component {
  add(n) {
    this.props.add(n);
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.add(1)}>+1</button>
        <button onClick={() => this.add(5)}>+5</button>
        <button onClick={() => this.add(10)}>+10</button>
      </div>
    )
  }
}

export default Count;
