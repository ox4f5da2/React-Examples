import React, { Component } from 'react'

export class Recommand extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    console.log('Recommand render');
    return (
      <div>Recommand</div>
    )
  }
}

export default Recommand