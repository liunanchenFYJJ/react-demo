import React, { Component } from "react";
import './ContentLeft.scss';
import SearchDetail from './SearchDetail';
import Recommand from './Recommand';

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
        temp.push(e.target.value);
        localStorage.setItem('historyList', JSON.stringify(temp));
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

  // 点击❌事件处理 TODO:
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
      <div>
        <div className="up">
          <div className="inputWrapper">
            <input ref="searchText" onFocus={this.handleFocus.bind(this)} onKeyDown={(e) => this.handleEnter(e)} onChange={(e) => this.handleInput(e)} />
            <span className="cancelCross" style={{display: this.state.showCancelCross ? 'block' : 'none',}} role="img" aria-label="叉" onClick={this.handleClearInput.bind(this)}>❌</span>
          </div>
          <span className="text" style={ this.state.cancelStyle } onClick={this.handleCancel.bind(this)}>取消</span>
        </div>
        <div className="main">
          {
            contentLeft
          }
        </div>
      </div>
    )
  }
}