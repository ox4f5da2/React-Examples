import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();

    this.titleRef = createRef();
  }
  getNativeDOM() {
    // 1.在react元素上放入一个ref字符串
    // console.log(this.refs.haha);

    // 2.用createRef创建ref对象，并绑定到元素上
    // console.log(this.titleRef.current);
    
    // 3.回调函数的形式
    console.log(this.title);
  }

  render() {
    return (
      <div>
        <h1 ref="haha">ref获取DOM</h1>
        <h2 ref={this.titleRef}>ref获取DOM</h2>
        <h3 ref={el => this.title = el}>ref获取DOM</h3>
        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}
