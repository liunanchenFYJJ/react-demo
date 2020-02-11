import React, { Component } from "react";
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: ['推荐', '排行'],
    };
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
                  // 子组件传值给父组件 onHandleTab
                  <div key={index} onClick={this.props.onHandleTab.bind(this, index)} className={this.props.currentIndex === index ? 'text activeColor': 'text'}>
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