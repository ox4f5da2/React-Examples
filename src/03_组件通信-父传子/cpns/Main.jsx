import React, { Component } from 'react'
import Banner from './Banner';
import ProductList from './ProductList';

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      banner: ['banner1', 'banner2', 'banner3'],
      product: ['product1', 'product2', 'product3'],
    }
  }

  render() {
    const { banner, product } = this.state;

    return (
      <div>
        <h2>Main</h2>
        <Banner banner={banner} />
        <Banner />
        <ProductList product={product} />
      </div>
    )
  }
}

export default Main;