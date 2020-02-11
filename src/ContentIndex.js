import React, { Component } from "react";
import './ContentIndex.scss';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

export default class ContentIndex extends Component {
  temp() {
    if (this.props.currentIndex === 1) {
      return (<ContentRight></ContentRight>)
    } else {
      return (<ContentLeft></ContentLeft>)
    }
  }

  render() {
    return (
      <section className="tab_cont">
        {
          this.temp()
        }
      </section>
    )
  }
}