import React, { Component } from "react";
import './Footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.downLoadQQMusicApp = this.downLoadQQMusicApp.bind(this);
  }

  downLoadQQMusicApp() {
    console.log('下载QQ音乐播放器');
  }

  render() {
    return (
      <footer className="bottom_bar">
        <div onClick={this.downLoadQQMusicApp} className="outer">
          <div className="inner">
            {/* 注意：react项目图片资源放在public文件夹下 */}
            <img alt="logo" src="./logo.svg"/>
            <p>安装QQ音乐 发现更多精彩</p>
          </div>
        </div>
      </footer>
    )
  }
}