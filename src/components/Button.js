/**
 * react中定义组件的两种方式
 * 1. function 函数
 * 2. es6 class
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonIn = styled.button`
  width: 25vw;
  height: 10vw;
  background-color: green;
  border-radius: 10px;
  /* 去除button的默认样式 */
  border: none;
  outline: none;
  padding: 0;
`;

/**
 * props 只读 important
 */

// 1.
// function Button(props) {
//   console.log(props)
//   return (
//     <button className="btn" onClick={handleBTN}>
//       {props.title}
//     </button>
//   )
// }

// 1.5 React.createElement
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// 2.
class Button extends Component {
  // 事件处理函数的调用 
  /**
   * 处理函数的this必须绑定
   * 1. 手动强制绑定
   * 2. 箭头函数
   */
  handleBTN = () => {
    console.log('click');
  }

  render() {
    return (
      <ButtonIn className="btn" onClick={this.handleBTN.bind(this)}>{this.props.title}</ButtonIn>
    )
  }
}


export default Button;