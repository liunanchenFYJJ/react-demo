import React, { Component } from "react";
import './CopyRight.scss';

export default class CopyRight extends Component {
  render() {
    return (
      <section className="copyright">
        <img alt="logo_ch" className="logo" src="./logo_ch.svg"/>
        <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
        <p>联系电话：0755-86013388 QQ群：55209235</p>
      </section>
    )
  }
}