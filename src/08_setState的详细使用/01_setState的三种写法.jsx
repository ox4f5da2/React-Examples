import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'hello world',
      count: 0
    }
  }

  changeText() {
    // 1. 基本用法
    // this.setState({ message: 'hello react' });

    // 2. 传入回调函数
    // this.setState((state, props) => {
    //   // 可以编写关于message的处理逻辑
    //   console.log('App: ', state, props);
    //   return {
    //     message: 'hello react'
    //   }
    // })

    // 3. setState是异步
    // 如果想在更新后立马拿到正确结果，可以利用回调
    this.setState({ message: 'hello react' }, () => {
      console.log('callback:', this.state.message);
    });
    console.log(this.state.message);
  }

  render() {
    const { message, count } = this.state;
    return (
      <div>
        <h1>setState的详细使用</h1>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>更改文本</button>
        <p>当前计数：{count}</p>
        <button>+1</button>
      </div>
    )
  }
}

export default App