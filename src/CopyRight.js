import React, { Component } from "react";
import styled from 'styled-components';

const CopyRightIn = styled.section`
    margin-top: .3rem;
    padding: .16rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      height: .22rem;
    }
    p {
      font-size: .12rem;
      font-weight: 300;
    }
`;

export default class CopyRight extends Component {
  render() {
    return (
      <CopyRightIn>
        <img alt="logo_ch" className="logo" src="./logo_ch.svg"/>
        <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
        <p>联系电话：0755-86013388 QQ群：55209235</p>
      </CopyRightIn>
    )
  }
}