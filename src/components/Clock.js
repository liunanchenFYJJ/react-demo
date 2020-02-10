import React, { Component } from 'react';

// 1. function写法
// function Clock(props) {
//   return (
//     <div>
//       <h1>{props.date.toLocaleTimeString()}</h1>
//     </div>
//   )
// }

// 2. class写法
/**
 * props 父组件的传值 props只读
 * state 组件内值 构造函数是惟一可以给state赋值的地方
 * 
 * props && state 的更新可能是异步的
 * 所以 this.setState()中返回一个函数， 而不是一个对象
 */

// class Component 中有三个参数 Component(props, context, updater)
class Clock extends Component {
  constructor(props) {
    console.log(Component);
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  // 生命周期函数 定义好的 思考: 生命周期函数 和 自定义的函数（如：tick）的异同？ TODO:
  componentDidMount() {
    console.log('挂载');
    this.clockTimer = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    console.log('卸载');
    clearInterval(this.clockTimer);
  }

  tick() {
    // 对象 摒弃
    // this.setState({
    //   date: new Date(),
    // })

    /**
     * setState 继承自 React.Component
     * setState 的入参数 两个
     * 第一个参数可以是object(如上)
     *     或者是function(如下)
     * 第二个参数？ TODO:
     */
    this.setState((state, props) => ({
      date: new Date(),
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;