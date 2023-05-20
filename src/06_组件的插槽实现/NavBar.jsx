import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class NavBar extends Component {
  render() {
    const { children } = this.props;
    console.log(children);
    return (
      <div>
        <h2>NavBar</h2>
        {/* children子元素 */}
        <div className="box">
          <div className="left">{children[0]}</div>
          <div className="center">{children[1]}</div>
          <div className="right">{children[2]}</div>
        </div>
      </div>
    )
  }
}

// 限制传入单个子元素
// NavBar.propTypes = {
//   children: PropTypes.element
// }

// 限制传入多个子元素
NavBar.propTypes = {
  children: PropTypes.array
}

export default NavBar