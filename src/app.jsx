import React from 'react';
import Intro from './intro';
import Features from './features';
import Demo from './demo';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Intro />
                <Features />
                <Demo />
            </div>
        )
    }
}