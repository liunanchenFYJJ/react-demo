import React, { Component } from "react";
import styled from 'styled-components';

const CustomSVG = styled.svg`
 /* 长宽受控于外面的span */
  width: inherit; 
  height: inherit;
  vertical-align: text-bottom;
  fill: currentColor;
  overflow: hidden;
  color: ${props => props.color};
`;

export default class Iconfont extends Component {
  // 2. 默认props 写法二
  static defaultProps = {
    color: 'rgba(26, 26, 26, .5)',
  }

  render() {
    return (
      <CustomSVG color={this.props.color} aria-hidden="true">
        <use xlinkHref={`#icon${this.props.icon}`}></use>
      </CustomSVG>
    )
  }
}

// 1. 默认props 写法一
// Iconfont.defaultProps = {
//   color: 'rgba(26, 26, 26, .5)',
// };