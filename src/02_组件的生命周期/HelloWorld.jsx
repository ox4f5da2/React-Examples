import React, { Component } from 'react'

export class HelloWorld extends Component {

  constructor() {
    super();

    this.state = {
      msg: 'Hello World'
    }
    console.log('Hello World constructor');
  }

  change() {
    this.setState({ msg: 'Hello React' });
  }

  render() {
    console.log('Hello World render')
    return (
      <div>
        {this.state.msg}
        <button onClick={() => this.change()}>change msg</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('Hello World mount');
  }

  componentDidUpdate() {
    console.log('Hello World update');
  }

  componentWillUnmount() {
    console.log('Hello World unmount');
  }
}

export default HelloWorld