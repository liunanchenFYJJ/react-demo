import React, { Component } from "react";
import styled from 'styled-components';

const $global_color = 'rgb(34, 213, 156)';
const HeaderIn = styled.header`
  height: .96rem;
  .outer {
    background-color: #fafafa;
    width: 100vw;
    height: .96rem;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    .up {
      height: .54rem;
      padding: 0 .16rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .center {
        display: flex;
        align-items: center;
        img {
          width: .25rem;
          height: .25rem;
          margin-right: .06rem;
        }
        .text {
          h2 {
            font-size: .16rem;
            color: #000;
            font-weight: 400;
          }
          p {
            font-size: .12rem;
            color: grey;
          }
        }
      }
      a.btn {
        height: .25rem;
        padding: 0 .17rem;
        border: 1px solid #d8d8d8;
        border-radius: 999px;
        font-size: .13rem;
        text-align: center;
        line-height: .25rem;
        white-space: nowrap;
        color: #575656;
        text-decoration: none;
      }
    }
    .down {
      height: .42rem;
      display: flex;
      .text {
        width: 50vw;
        text-align: center;
        span {
          position: relative;
          display: block;
          font-size: .16rem;
          font-weight: 300;
          line-height: .42rem;
          height: .42rem;
        }
      }

      /* 当前点击class */
      .activeColor {
        span {
          color: ${$global_color};
          &::after {
            content: '';
            width: .2rem;
            height: .03rem;
            background-color: ${$global_color}; /* 全局颜色 */
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
          }
        }
      }
    }
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: ['推荐', '排行'],
    };
  }

  render() {
    return (
      <HeaderIn>
        <div className="outer">
          <div className="up">
            <div className="center">
              <img alt="logo" src="./logo.svg" />
              <div className="text">
                <h2>QQ音乐</h2>
                <p>打开APP收藏下载</p>
              </div>
            </div>
            <a className="btn" href="https://apps.apple.com/cn/app/id414603431">下载APP</a>
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
      </HeaderIn>
    )
  }
} 