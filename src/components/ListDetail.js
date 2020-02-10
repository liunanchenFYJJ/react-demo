import React, { Component } from "react";
import './ListDetail.scss';

export default class ListDetail extends Component {
  render() {
    return (
      <div className="ListDetail">
        <div className="img">
          <img src="./300.jpeg" />
          <span>播放次数</span>
        </div>
        <div className="text">
          <h3>欧美| 流行节奏控</h3>
        </div>
      </div>
    )
  }
}