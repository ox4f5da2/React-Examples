import React, { Component } from 'react'
import Tab from './Tab'

export class App extends Component {
  constructor() {
    super();

    this.state = {
      tabs: ['tab1', 'tab2', 'tab3'],
      currentIndex: 0
    }
  }

  clickTab(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    const { tabs, currentIndex } = this.state;
    return (
      <div>
        <h1>组件通信案例练习</h1>
        <Tab tabs={tabs} clickTab={(idx) => this.clickTab(idx)} />
        当前点击的Tab为：{tabs[currentIndex]}
      </div>
    )
  }
}

export default App