import React, { Component } from "react";
import styled from 'styled-components';

const LabelIn = styled.div`
  display: inline-block;
  background-color: #fff;
  margin: 0 .1rem .1rem 0;
  padding: 0 .1rem;
  height: .24rem;
  border-radius: .24rem;
  white-space: nowrap;
  font-size: .12rem;
  line-height: .24rem;
`;

export default class Label extends Component {
  render() {
    return (
      <LabelIn>{this.props.title}</LabelIn>
    )
  }
}