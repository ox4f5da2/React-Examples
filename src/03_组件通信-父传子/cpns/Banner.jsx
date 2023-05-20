import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Banner extends Component {
  render() {
    const { banner } = this.props;
    return (
      <div>
        <h3>Banner</h3>
        <ul>
          {
            banner.map(item => {
              return (
                <li key={item}>{ item }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

Banner.propTypes = {
  banner: propTypes.array.isRequired
}

// 指定 props 的默认值：
Banner.defaultProps = {
  banner: ['default banner1', 'default banner2', 'default banner3'],
};

export default Banner;