import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Body3 extends Component {
    state = {
        isFocus: false
    };
    handleFocus = () => {
        this.setState({ isFocus: !this.state.isFocus });
    };
    handleCancel = () => {
        this.setState({ isFocus: !this.state.isFocus });
    };
    render() {
        const outDiv = {
            padding: '0.8em',
            background: '#f4f4f4',
        };
        let inputDivStyle = {
            width: this.state.isFocus ? '70%' : '88%',
            padding: '0.6em 1.6em 0.6em 1em',
            background: '#fff',
            display: 'inline-block',
        };
        const inputStyle = {
            width: '85%',
            border: 'none',
            outline: 'none',
            marginLeft: '0.4em',
        };
        let spanStyle = {
            background: '#f4f4f4',
            display: this.state.isFocus ? 'inline-block' : 'none',
            padding: '0 10px 0 10px',
            fontSize: '0.8em'
        };
        const text = '搜索歌曲、歌单、专辑';
        return (
            <div style={outDiv}>
                <div  style={inputDivStyle}>
                    <i className='fa fa-search'></i>
                    <input style={inputStyle} onFocus={this.handleFocus} placeholder={text} />
                </div>
                <div style={spanStyle} onClick={this.handleCancel}>取消</div>
            </div>
        )
    }
}