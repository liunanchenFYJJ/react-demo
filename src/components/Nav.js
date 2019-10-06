import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    const navStyle = {
      marginTop: '80px',
      height: '40px',
      display: 'flex',
      lineHeight: '34px',
    }
    const item = {
      flexGrow: 1, // 三平分
      alignSelf: 'flex-end',
      textAlign: 'center',
      background: '#fff',
      borderBottom: '2px solid rgb(255, 255, 255)',
    }
    const focus = {
      flexGrow: 1, // 三平分
      alignSelf: 'flex-end',
      textAlign: 'center',
      background: '#fff',
      color: 'rgb(49, 194, 124)',
      borderBottom: '2px solid rgb(49, 194, 124)',
    }

    return (
      <div style={navStyle}>
        <div style={item}>推荐</div>
        <div style={item, focus}>排行榜</div>
        <div style={item}>搜索</div>
      </div>
    )
  }
}