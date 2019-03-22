import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
    render() {
        const footerStyle = {
            textAlign: 'center',
            fontSize: '0.6em',
        }
        return (
            <div style={footerStyle}>
                <a>查看电脑版网页</a><br />
                <div className='imgStyle'></div>
                <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
                <p>联系电话： 0755-86013388 QQ群： 55209235</p>
            </div>
        )
    }
}