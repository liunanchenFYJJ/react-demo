import React, { Component } from "react";
import styled from 'styled-components';
import ImgFloatBottom from './ImgFloatBottom';

const ListDetailIn = styled.div`
  margin: 0 .04rem;
  width: 1.05rem;
  .img {
    width: 1.05rem;
    height: 1.05rem;
    position: relative;
    img {
      width: inherit;
      border-radius: .08rem;
    }
  }
  .text {
    h3 {
      margin-top: .08rem;
      font-weight: 300;
      font-size: .14rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export default class ListDetail extends Component {
  render() {
    return (
      <ListDetailIn>
        <div className="img">
          <img src="./300.jpeg" alt="300.jpeg" />
          <ImgFloatBottom text="播放次数"></ImgFloatBottom>
        </div>
        <div className="text">
          <h3>欧美| 流行节奏控</h3>
        </div>
      </ListDetailIn>
    )
  }
}