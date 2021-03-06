import React, { Component } from "react";
import styled from 'styled-components';

const FooterIn = styled.footer`
  height: .45rem;
  padding: .16rem;
  bottom: .16rem;
  .outer {
    padding: 0 .16rem;
    position: fixed;
    bottom: .16rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
    border-radius: .45rem;
    background-color: #fafafa;
    box-shadow: 0 3px 25px rgba(0, 0, 0, .05);
    .inner {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      height: .45rem;
      img {
        width: .22rem;
        height: .22rem;
        margin-right: .1rem;
      }
      p {
        font-size: .12rem;
        font-weight: lighter;
      }
    }
  }
`

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.downLoadQQMusicApp = this.downLoadQQMusicApp.bind(this);
  }

  downLoadQQMusicApp() {
    window.location.href="https://apps.apple.com/cn/app/id414603431";
  }

  render() {
    return (
      <FooterIn>
      {/* <FooterIn className="bottom_bar"> */}
        <div onClick={this.downLoadQQMusicApp} className="outer">
          <div className="inner">
            {/* 注意：react项目图片资源放在public文件夹下 */}
            <img alt="logo" src="./logo.svg"/>
            <p>安装QQ音乐 发现更多精彩</p>
          </div>
        </div>
      </FooterIn>
    )
  }
}