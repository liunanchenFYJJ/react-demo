import React, { Component } from 'react';

export default class Mycom extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <span className="mycom">my time is {tick()}</span>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}

function tick() {
    return new Date().toLocaleTimeString();
}