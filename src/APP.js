import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Tab, Tabs, AppBar, Grid } from '@material-ui/core'

export default class App extends Component {
    render() {
        const appStyle = {
            height: '100%'
        }
        const tabStyle = {
            paddingTop: '26%'
        }
        return (
            <div style={appStyle}>
                <Header />
                <Tabs centered value="2" style={tabStyle}>
                    <Tab label="推荐" value="1" />
                    <Tab label="排行榜" value="2" />
                    <Tab label="搜索" value="3" />
                </Tabs>
                <Footer />
            </div>
        );
    }
}