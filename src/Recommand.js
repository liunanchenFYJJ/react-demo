import React, { Component } from "react";
import styled from 'styled-components';
import ListDetail from './components/ListDetail';

const RecommandIn = styled.div`
  .mod {
    .title {
      margin: .2rem .16rem .1rem .16rem;
      padding-right: .1rem;
      height: .3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: .18rem;
        font-weight: 700;
      }
      span {
        font-weight: 300;
        font-size: 13px;
        color: rgba(26, 26, 26, .4);
        &::after {
          content: '>';
        }
      }
    }
    .content {
      height: 1.5rem;
      padding: .1rem 0;
      ul {
        list-style: none;
        display: flex;
        margin-left: .12rem;
        height: inherit;
        overflow-x: scroll; /* 滚动 */
        /* 隐藏滚动条 TODO: 其他方式？ */
        /* 1.chrome 兼容其他的浏览器 困难 */
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

export default class Recommand extends Component {
  render() {
    const temp = [1,2,3,4,5,6];
    const temp1 = [1,2,3,4,5,6,7,8,9,10];
    const temphtml = temp.map((item,index) =>(<li key={index}><ListDetail></ListDetail></li>))
    const temphtml1 = temp1.map((item,index) => {
      return (
        <li key={index}>
          <ListDetail></ListDetail>
        </li>
      )
    })
    return (
      <RecommandIn>
        {/* 官方歌单 */}
        <div className="mod">
          <div className="title">
            <h2>官方歌单</h2>
            <span>更多</span>
          </div>
          <div className="content">
            <ul>
              { temphtml }
            </ul>
          </div>
        </div>
        {/* 推荐歌单 */}
        <div className="mod">
          <div className="title">
            <h2>推荐歌单</h2>
            <span>更多</span>
          </div>
          <div className="content">
            <ul>
              { temphtml }
            </ul>
          </div>
        </div>
        {/* 专区 */}
        <div className="mod">
          <div className="title">
            <h2>专区</h2>
            <span>更多</span>
          </div>
          <div className="content">
            <ul>
              { temphtml1 }
            </ul>
          </div>
        </div>
        
      </RecommandIn>
    )
  }
}