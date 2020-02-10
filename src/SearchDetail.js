import React, { Component } from "react";
import './SearchDetail.scss';
import Label from './components/Label';

export default class SearchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyList: [],
      showHistory: false,
    };
  }

  handleClearHistoryList() {
    localStorage.setItem('historyList', '');
    this.setState((state, props) => ({
      showHistory: false,
    }));
  }
  
  componentDidMount() {    
    // 取出是否有历史记录
    let historyList = localStorage.getItem('historyList'); // null 或 ''
    if (historyList) {
      this.setState((state, props) => ({
        historyList: JSON.parse(historyList),
        showHistory: true,
      }));
    }
  }

  render() {
    const testArr = [1, 2, 4444444, 444, 44444444444, 3, 44, 555,];
    const searchHistory = this.state.historyList.map((item, index) => <Label title={item} key={index}></Label>);
    const searchHistory1 = testArr.map((item, index) => <Label title={item} key={index}></Label>);
    return (
      <div>
        <div style={{display: this.state.showHistory ? 'block' : 'none',}} className="histroy">
          <h2>
            搜索历史
            <span className="icon" onClick={this.handleClearHistoryList.bind(this)}></span>
          </h2>
          <div className="histroyList">
            { searchHistory }
          </div>
        </div>
        <div className="hot">
          <h2>热门搜索</h2>
          <div className="histroyList">
            { searchHistory1 }
          </div>
        </div>
      </div>
    )
  }
}