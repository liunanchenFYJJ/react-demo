import React, { Component } from "react";
import './ListDetail.scss';
import ImgFloatBottom from './ImgFloatBottom';

export default class ListDetail extends Component {
  render() {
    return (
      <div className="ListDetail">
        <div className="img">
          <img src="./300.jpeg" alt="300.jpeg" />
          <ImgFloatBottom text="播放次数"></ImgFloatBottom>
        </div>
        <div className="text">
          <h3>欧美| 流行节奏控</h3>
        </div>
      </div>
    )
  }
}