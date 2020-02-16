import React, { Component } from "react";
import styled from 'styled-components';
import ImgFloatBottom from './ImgFloatBottom';

const $song_list_height = '1.2rem';
const SongListIn = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    height: 1.2rem;
    width: calc(100vw - .16rem * 2 - 1.2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin: 0 .12rem .04rem .12rem;
      font-weight: 700;
      font-size: .16rem;
    }
    ol {
      margin-left: .12rem;
      list-style-type: decimal;
      li {
        height: .17rem;
        line-height: .16rem;
        margin: 0 .12rem .04rem .22rem;
        font-weight: 300;
      }
    }
  }
  .right {
    height: 1.2rem;
    width: 1.2rem;
    position: relative;
    img {
      border-top-right-radius: .08rem;
      border-bottom-right-radius: .08rem;
      height: inherit;
    }
  }
`;

export default class SongList extends Component {
  render() {
    return (
      <SongListIn>
        <div className="left">
          <h2>飙升榜</h2>
          <ol>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ol>
        </div>
        <div className="right">
          <img src="./songlist.jpg" alt="songlist.jpg" />
          <ImgFloatBottom text="播放次数"></ImgFloatBottom>
        </div>
      </SongListIn>
    )
  }
}