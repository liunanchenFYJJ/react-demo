import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

export default class Header extends Component {
    render() {
        const headerStyle = {
            // color: 'red',
            // width: '100%',
            // backgroundColor: 'rgb(255, 251, 240)',
            height: '15%',
            zIndex: '10'
        }
        return (
            // <div style={headerStyle}>
                <AppBar style={headerStyle}>
                    Header
                </AppBar>
            // </div>
        )
    }
}