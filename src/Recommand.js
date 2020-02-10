import React, { Component } from "react";
import './Recommand.scss';
import ListDetail from './components/ListDetail';

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
      <div>
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
        
      </div>
    )
  }
}