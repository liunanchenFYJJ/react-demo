import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Body3 extends Component {
    handleFocus = () => {
        console.log('dd');
    }
    render() {
        const inputDivStyle = {
            width: '100%',
            padding: '0.6em 1.6em 0.6em 1em',
            inputStyle: {
                border: 'none',
            }
        };
        const text = '搜索歌曲、歌单、专辑'
        return (
            <div>
                <div  style={inputDivStyle}>
                    <span><i className='fa fa-search'></i></span>
                    <input style={inputDivStyle.inputStyle} onFocus={this.handleFocus} placeholder={text} />
                </div>
            </div>
        )
    }
}