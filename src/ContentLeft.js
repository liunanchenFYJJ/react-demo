import React, { Component } from "react";
import styled from 'styled-components';
import SearchDetail from './SearchDetail';
import Recommand from './Recommand';
import Iconfont from './components/Iconfont';

const ContentLeftIn = styled.div`
  .up {
    margin-top: .16rem;
    display: flex;
    align-items: center;
    .inputWrapper {
      margin-left: .16rem;
      position: relative;
      span.cancelCross1 {
        position: absolute;
        left: .08rem;
        top: .06rem;
        z-index: 50;
        width: .16rem;
        height: .16rem;
      }
      input {
        width: calc(100vw - 1rem);
        height: .2rem;
        border: none;
        outline: none;
        padding: .05rem 0 .05rem .28rem;
        /* input focus导致页面放大 只能把font-size设置为16px */
        font-size: .16rem;
        font-weight: 300;
        border-radius: .3rem;
        position: relative;
        &::after {
          content: '搜索';
          position: absolute;
          bottom: 0;
          left: 0;
        }
        &::placeholder {
          font-size: .14rem;
          font-weight: 300;
        }
      }
      span.cancelCross2 {
        position: absolute;
        right: .08rem;
        top: .06rem;
        z-index: 50;
        width: .16rem;
        height: .16rem;
      }
    }
    span.text {
      font-size: .14rem;
      font-weight: 700;
      width: .6rem;
      height: .3rem;
      box-sizing: border-box;
      line-height: .3rem;
      padding: 0 .16rem;
    }
  }
`;

export default class ContentLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCancel: false,
      showCancelCross: false,
      cancelStyle: {
        display: 'none',
      },
    };
  }

  handleFocus() {
    this.setState((state, props) => ({
      cancelStyle: {
        display: 'inline-block',
      }
    }))
  }

  // 取消
  handleCancel() {
    this.handleClearInput();
    this.setState((state, props) => ({
      cancelStyle: {
        display: 'none',
      }
    }))
  }

  // enter搜索
  handleEnter(e) {
    let historyList = localStorage.getItem('historyList');
    if (e.key === 'Enter') {
      if (!historyList) {
        localStorage.setItem('historyList', JSON.stringify([e.target.value]));
      } else {
        let temp = JSON.parse(historyList);
        if (temp.indexOf(e.target.value) < 0) {          
          temp.push(e.target.value);
          localStorage.setItem('historyList', JSON.stringify(temp));
        }
      }
    }
  }

  // input输入处理 控制❌
  handleInput(e) {
    if (e.target.value) {
      this.setState((state, props) => ({
        showCancelCross: true,
      }))
    } else {
      this.setState((state, props) => ({
        showCancelCross: false,
      }))
    }
  }

  // 点击❌事件处理
  handleClearInput() {
    this.refs['searchText'].value = null;
    this.setState((state, props) => ({
      showCancelCross: false,
    }))
  }

  render() {
    let contentLeft;
    if (this.state.cancelStyle.display === 'none') {
      contentLeft = <Recommand></Recommand>
    } else {
      contentLeft = <SearchDetail></SearchDetail>
    }


    return (
      <ContentLeftIn>
        <div className="up">
          <div className="inputWrapper">
            <span className="cancelCross1"><Iconfont icon="sousuo"></Iconfont></span>
            <input ref="searchText" placeholder="搜索" onFocus={this.handleFocus.bind(this)} onKeyDown={(e) => this.handleEnter(e)} onChange={(e) => this.handleInput(e)} />
            <span className="cancelCross2" style={{display: this.state.showCancelCross ? 'block' : 'none',}} role="img" aria-label="叉" onClick={this.handleClearInput.bind(this)}><Iconfont icon="fork"></Iconfont></span>
          </div>
          <span className="text" style={ this.state.cancelStyle } onClick={this.handleCancel.bind(this)}>取消</span>
        </div>
        <div>
          {
            contentLeft
          }
        </div>
      </ContentLeftIn>
    )
  }
}