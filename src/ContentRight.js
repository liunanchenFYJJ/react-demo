import React, { Component } from "react";
import styled from 'styled-components';
import SongList from './components/SongList';

const $song_list_height = '32vw';
const ContentRightIn = styled.div`
  div {
    ul {
      margin-top: .22rem;
      list-style: none;
      li {
        margin: 0 .16rem .13rem .16rem;
        background-color: #fff;
        height: ${$song_list_height};
      }
    }
  }
`;

export default class ContentLeft extends Component {
  render() {
    const tempList = [1,2,3,4,5];
    const tempListHtml = tempList.map((item, index) => <li key={index}><SongList></SongList></li>)
    return (
      <ContentRightIn>
        <ul>
          {
            tempListHtml
          }
        </ul>
      </ContentRightIn>
    )
  }
}