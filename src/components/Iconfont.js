import React, { Component } from "react";
import styled from 'styled-components';

const CustomSVG = styled.svg`
 /* 长宽受控于外面的span */
  width: inherit; 
  height: inherit;
  vertical-align: text-bottom;
  fill: currentColor;
  overflow: hidden;
  color: rgba(26, 26, 26, .5);
`;

export default class Iconfont extends Component {
  render() {
    return (
      <CustomSVG aria-hidden="true">
        <use xlinkHref={`#icon${this.props.icon}`}></use>
      </CustomSVG>
    )
  }
}