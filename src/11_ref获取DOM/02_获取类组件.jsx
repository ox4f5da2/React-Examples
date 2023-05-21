import React, { PureComponent, createRef } from 'react'

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

export default class App extends PureComponent {
  constructor() {
    super();

    this.helloWorldRef = createRef();
  }
  getNativeDOM() {
    console.log(this.helloWorldRef.current);
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.helloWorldRef} />
        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}
