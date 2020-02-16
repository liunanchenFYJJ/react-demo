import React, { Component } from "react";
import styled from 'styled-components';

const ImgFloatBottomIn = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 .08rem;
  background: rgba(0, 0, 0, .4);
  border-radius: .08rem;
  z-index: 50;
  color: #fff;
  font-size: .1rem;
  &::before {
    content: '>';
  }
`;

export default class ImgFloatBottom extends Component {
  render() {
    return (
      <ImgFloatBottomIn>{this.props.text}</ImgFloatBottomIn>
    )
  }
}