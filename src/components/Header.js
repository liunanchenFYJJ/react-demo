import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import './header.css'

export default class Header extends Component {
    render() {
        const headerStyle = {
            // color: 'red',
            width: '100%',
            // backgroundColor: 'rgb(255, 251, 240)',
            height: '15%',
            // zIndex: '10',
            buttonStyle: {
                position: 'absolute',
                right: '0.6em',
                top: '7.5%',
                transform: 'translate(0%, -50%)',
            },
            imgStyle: {
                width: '36%',
                height: '35px', 
                position: 'absolute',
                left: '0.6em',
                top: '7.5%',
                transform: 'translate(0%, -50%)',
            }
        }
        return (
            <div style={headerStyle}>
                <img style={headerStyle.imgStyle} />
                <Fab
                    variant="extended"
                    size="small"
                    aria-label="Add"
                    style={headerStyle.buttonStyle}
                    // className={classes.margin}
                    >
                    {/* <NavigationIcon className={classes.extendedIcon} /> */}
                    下载APP
                </Fab>
            </div>
        )
    }
}