import React, { Component } from "react";
import './ImgFloatBottom.scss';

export default class ImgFloatBottom extends Component {
  render() {
    return (
      <span className="img_float_bottom">{this.props.text}</span>
    )
  }
}