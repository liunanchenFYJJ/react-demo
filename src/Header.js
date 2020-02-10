import React, { Component } from "react";
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActiveIndex: 0,
      tabList: ['推荐', '排行'],
    };
  }

  handleTab(idx) {
    this.setState((state, props) => ({
      tabActiveIndex: idx,
    }))

    switch (idx) {
      case 1:
        console.log('1');
        break;
        
        default:
          console.log('0');
        break;
    }
  }

  render() {
    return (
      <header className="header">
        <div className="outer">
          <div className="up">
            <div className="center">
              <img alt="logo" src="./logo.svg" />
              <div className="text">
                <h2>QQ音乐</h2>
                <p>打开APP收藏下载</p>
              </div>
            </div>
            <div className="btn">下载APP</div>
          </div>
          <div className="down">
            {
              this.state.tabList.map((item, index) => {
                return (
                  <div key={index} onClick={this.handleTab.bind(this, index)} className={this.state.tabActiveIndex === index ? 'text activeColor': 'text'}>
                    <span>{item}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </header>
    )
  }
} 