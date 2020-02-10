import React, { Component } from "react";
import './ContentIndex.scss';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

export default class ContentIndex extends Component {
  render() {
    return (
      <section className="tab_cont">
        <ContentLeft></ContentLeft>
        {/* <ContentRight></ContentRight> */}
      </section>
    )
  }
}