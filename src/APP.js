import React, { Component } from 'react';
import Header from './components/Header';

import Ad from './components/Ad';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Nav from './components/Nav'
import Content from './components/Content'
import { Tab, Tabs, AppBar, TabContainer } from '@material-ui/core';
// import freezeObj from './js/freezeObj';
import { Cars, Civic } from './js/Cars';

let ci = new Civic();
console.log(ci);
ci.color = 'red';
console.log(ci.color);

let s = new Object({age: 10});
console.log(s);
console.log(s.job);

export default class App extends Component {
    state = {
        value: 0
    };
    handle = (evt, value) => {
        this.setState({ value });
    };
    render() {
        const appStyle = {
            height: '100%',
            width: '100%',
        }
        const { value } = this.state;
        return (
            <div style={appStyle}>
                <Header />
                <Nav />
                <Content />
                {/* <AppBar position="static" color="inherit">
                    <Tabs value={value} onChange={this.handle} centered>
                        <Tab label="推荐" />
                        <Tab label="排行榜" />
                        <Tab label="搜索" />
                    </Tabs>
                </AppBar> */}
                {/* {value === 0 && <Body1 />}
                {value === 1 && <Body2 />}
                {value === 2 && <Body3 />} */}
                <Ad />
            </div>
        );
    }
}