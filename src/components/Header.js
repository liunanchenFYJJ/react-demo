import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';

export default class Header extends Component {
    render() {
        const headerStyle = {
            // color: 'red',
            // width: '100%',
            // backgroundColor: 'rgb(255, 251, 240)',
            height: '15%',
            zIndex: '10',
            buttonStyle: {
                position: 'absolute',
                right: '10px',
                top: '40px',
            },
            imgSrc: '../assets/logo_ch.svg',
            imgStyle: {
                width: '40%',
                height: '20px',
                position: 'absolute',
                left: '10px',
                top: '40px',
            }
        }
        return (
            <div style={headerStyle}>
                <img src={headerStyle.imgSrc} style={headerStyle.imgStyle} />
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