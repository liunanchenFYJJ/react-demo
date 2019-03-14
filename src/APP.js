import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Tab, Tabs, AppBar } from '@material-ui/core'

export default class App extends Component {
    render() {
        const appStyle = {
            height: '100%'
        }
        return (
            <div style={appStyle}>
                <Header />
                <AppBar position="static">
                    <Tabs centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <Footer />
            </div>
        );
    }
}