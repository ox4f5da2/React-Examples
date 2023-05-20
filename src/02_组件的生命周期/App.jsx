import React, { Component } from 'react'
import HelloWorld from './HelloWorld';

export class App extends Component {

  constructor() {
    super();

    this.state = {
      isShow: true
    }
  }

  click() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={() => this.click()}>卸载</button>
        { isShow && <HelloWorld /> }
      </div>
    )
  }
}

export default App;