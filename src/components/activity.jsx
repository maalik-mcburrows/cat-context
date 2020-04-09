import React, { Component } from 'react';
import { ActivityContext } from '../contexts/activityContext';

export default class Activity extends Component {
    static contextType = ActivityContext;

    render() {
        const { activity, handleClick } = this.context;
        return (
            <div>
                <p>The cat is { activity }...</p>
                <button value='napping' onClick={this.handleClick(e)}>Napping</button>
                <button value='eating' onClick={this.handleClick(e)}>Eating</button>
                <button value='sleeping' onClick={this.handleClick(e)}>Sleeping</button>
            </div>
        )
    }
}


