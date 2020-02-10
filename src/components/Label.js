import React, { Component } from "react";
import './Label.scss';

export default class Label extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: Label的样式
  render() {
    return (
      <div className="label">{this.props.title}</div>
    )
  }
}