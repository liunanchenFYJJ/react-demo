import React, { Component } from "react";
import styled from 'styled-components';
import Iconfont from './Iconfont';

const ImgFloatBottomIn = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 .08rem 0 .18rem;
  background: rgba(0, 0, 0, .4);
  border-radius: .08rem;
  z-index: 50;
  color: #fff;
  font-size: .1rem;
  span.cancelCross1 {
    position: absolute;
    left: .04rem;
    top: .01rem;
    z-index: 50;
    width: .14rem;
    height: .14rem;
  }
`;

export default class ImgFloatBottom extends Component {
  render() {
    return (
      <ImgFloatBottomIn>
        <span className="cancelCross1"><Iconfont icon="icon_play" color="#fff"></Iconfont></span>
        {this.props.text}
      </ImgFloatBottomIn>
    )
  }
}