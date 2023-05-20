import React, { Component } from 'react'

export class ProductList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h3>ProductList</h3>
        <ul>
          {
            product.map(item => {
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

export default ProductList;