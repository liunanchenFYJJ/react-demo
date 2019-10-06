import React, { Component } from 'react';
import './header.css';
import logo from '../assets/logo_ch.svg';

export default class Header extends Component {
    render() {
        const headerStyle = {
            width: 'calc(100% - 20px)',
            height: '80px',
            background: '#fff',
            padding: '0 10px',
            position: 'fixed',
            top: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // zIndex: '10',
            buttonStyle: {
                border: '1px solid rgba(0,0,0,.3)',
                height: '27px',
                background: '#fff',
                borderRadius: '25px',
                padding: '0 10px',
                fontSize: '14px',
            },
            imgStyle: {
                width: '127px',
                height: '35px',
                url: 'url("../assets/logo_ch.svg")'
            }
        }
        return (
            <div style={headerStyle}>
                <img src={logo} style={headerStyle.imgStyle} />
                <button style={headerStyle.buttonStyle}>下载APP</button>
            </div>
        )
    }
}