import React, { Component } from 'react'

export class Home extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log('Home render');
    return (
      <div>Home</div>
    )
  }
}

export default Home