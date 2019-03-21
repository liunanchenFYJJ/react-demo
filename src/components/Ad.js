import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab'

export default class Ad extends Component {
    render() {
        const adStyle = {
            width: '100%',
            height: '3em',
            position: 'absolute',
            bottom: '0',
            zIndex: '10',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            buttonStyle: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }
        }
        return (
            <div style={adStyle}>
                <Fab
                    // style={adStyle.buttonStyle}
                    variant="extended"
                    size="small"
                    aria-label="Add"
                    >
                    安装QQ音乐 发现更多精彩
                </Fab>
            </div>
        )
    }
}