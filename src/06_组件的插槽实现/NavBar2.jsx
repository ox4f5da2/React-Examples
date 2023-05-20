import React, { Component } from 'react'

export class NavBar2 extends Component {
  render() {
    const { left, center, right } = this.props;
    return (
      <div>
        <h2>NavBar2</h2>
        {/* props属性 */}
        <div className="left">{left}</div>
        <div className="center">{center}</div>
        <div className="right">{right}</div>
      </div>
    )
  }
}

export default NavBar2