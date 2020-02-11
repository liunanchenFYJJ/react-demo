import React, { Component } from "react";
import Header from './Header';
import ContentIndex from './ContentIndex';
import CopyRight from './CopyRight';
import Footer from './Footer';

export default class App extends Component {
  // Header 和 ContentIndex 的状态提升到共同的父组件中
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 1,
    }
  }

  onHandleTab_P(id) {
    this.setState((state, props) => ({
      currentIndex: id,
    }))
  }

  render() {
    return (
      <div className="App">
        <Header onHandleTab={this.onHandleTab_P.bind(this)} currentIndex={this.state.currentIndex}></Header>
        <ContentIndex currentIndex={this.state.currentIndex}></ContentIndex>
        <CopyRight></CopyRight>
        <Footer></Footer>
      </div>
    )
  }
}