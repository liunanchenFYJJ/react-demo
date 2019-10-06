import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab'

export default class Ad extends Component {
    render() {
        const adStyle = {
            width: '100%',
            height: '33px',
            padding: '15px 0',
            position: 'fixed',
            bottom: '0',
            zIndex: '10',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            buttonStyle: {
                height: 'inherit',
                background: '#30c27c',
                borderRadius: '99px',
                fontSize: '14px',
                color: '#fff',
                padding: '0 15px',
                outline: 'none',
            }
        }
        return (
            <div style={adStyle}>
                <button style={adStyle.buttonStyle}>安装QQ音乐 发现更多精彩</button>
            </div>
        )
    }
}