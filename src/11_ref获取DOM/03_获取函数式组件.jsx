import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h1 ref={ref}>Hello World</h1>
      <h2>hahaha</h2>
    </div>
  )
})

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
