import React, { Component } from 'react';
import Mycom from './components/Mycom'
import Welcome from './components/fncom'
import formatName from './js/formatName'

export default class App extends Component {
    render() {
        const user = {
            firstName: 'KYIRE',
            lastName: 'IRVING'
        };
        const element = <h1>hello {formatName(user)}!</h1>;

        return (
            <div>
                <Welcome name="jj"/>
                { element }
                <Mycom msg="hello"/>
            </div>
        );
    }
}