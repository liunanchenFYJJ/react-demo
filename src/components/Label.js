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
  // 组件生命周期函数
  // mounted
  componentWillMount() {
    console.log('will 加载');
  }
  componentDidMount() {
    console.log('did 加载');
  }

  // update
  componentWillReceiveProps() {
    console.log('will 接收 props');
  }
  shouldComponentUpdate() {
    console.log('接收 props');
  }
  componentWillUpdate() {
    console.log('will 更新');
  }
  componentDidUpdate() {
    console.log('did 更新');
  }

  // destroy
  componentWillUnmount() {
    console.log('卸载');
  }

  render() {
    return (
      <LabelIn>{this.props.title}</LabelIn>
    )
  }
}