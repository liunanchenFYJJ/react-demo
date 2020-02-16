import React, { Component } from "react";
import styled from 'styled-components';
import SongList from './components/SongList';

const ContentRightIn = styled.ul`
      margin-top: .22rem;
      list-style: none;
      li {
        margin: 0 .16rem .13rem .16rem;
        background-color: #fff;
      }
`;

export default class ContentLeft extends Component {
  render() {
    const tempList = [1,2,3,4,5];
    const tempListHtml = tempList.map((item, index) => <li key={index}><SongList></SongList></li>)
    return (
      <ContentRightIn>
          {
            tempListHtml
          }
      </ContentRightIn>
    )
  }
}