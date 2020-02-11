import React, { Component } from "react";
import './SongList.scss';
import ImgFloatBottom from './ImgFloatBottom';

export default class SongList extends Component {
  render() {
    return (
      <div className="SongList">
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
      </div>
    )
  }
}