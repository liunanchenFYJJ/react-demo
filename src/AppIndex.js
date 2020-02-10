import React, { Component } from "react";
import Header from './Header';
import ContentIndex from './ContentIndex';
import CopyRight from './CopyRight';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ContentIndex></ContentIndex>
        <CopyRight></CopyRight>
        <Footer></Footer>
      </div>
    )
  }
}