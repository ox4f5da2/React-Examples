import React, { Component } from 'react'

export class Tab extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0
    }
  }

  clickTab(idx) {
    this.props.clickTab(idx);
    this.setState({ currentIndex: idx });
  }

  render() {
    const { tabs, itemType } = this.props;
    const { currentIndex } = this.state;
    return (
      <div>
        {
          tabs.map((tab, index) => <span
            style={{
              marginRight: '10px',
              color: `${currentIndex === index ? 'red' : 'black'}`
            }}
            key={tab}
            onClick={() => this.clickTab(index)}
          >
            {itemType(tab)}
          </span>
          )
        }
      </div>
    )
  }
}

export default Tab