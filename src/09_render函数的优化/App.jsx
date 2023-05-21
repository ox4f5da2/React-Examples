import React, { PureComponent } from 'react';
import Home from './Home.jsx';
import Recommand from './Recommand.jsx';
import Profile from './Profile.jsx';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: 'hello world',
      count: 0
    }
  }

  changeText() {
    this.setState({ message: 'hello world' });
  }

  changeText2() {
    this.setState({ message: 'hello react' });
  }

  // shouldComponentUpdate(newProps, newState) {
  //   return this.state.message !== newState.message;
  // }

  add() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('App render');
    const { message, count } = this.state;
    return (
      <div>
        <h1>render函数的优化</h1>
        <h2>App-{message}-{count}</h2>
        <button onClick={() => this.changeText()}>修改相同的文本</button>
        <button onClick={() => this.changeText2()}>修改不同的文本</button>
        <Home />
        <Recommand />
        <Profile message={message} />
        <button onClick={() => this.add()}>+1</button>
      </div>
    )
  }
}

export default App