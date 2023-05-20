import React, { Component } from 'react'
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>组件的插槽实现</h1>
        <NavBar>
          <span>left</span>
          <span>center</span>
          <span>right</span>
        </NavBar>

        <NavBar2
          left={<button>left</button>}
          center={<span>center</span>}
          right={<em>right</em>}
        />
      </div>
    )
  }
}

export default App