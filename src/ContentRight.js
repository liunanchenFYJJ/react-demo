import React, { Component } from "react";
import './ContentRight.scss';
import SongList from './components/SongList';

export default class ContentLeft extends Component {
  render() {
    const tempList = [1,2,3,4,5];
  const tempListHtml = tempList.map((item, index) => <li key={index}><SongList></SongList></li>)
    return (
      <div>
        <ul>
          {
            tempListHtml
          }
        </ul>
      </div>
    )
  }
}