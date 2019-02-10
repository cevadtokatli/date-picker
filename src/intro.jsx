import React from 'react';
import {bindOnce} from 'dom-display-detector';

export default class Intro extends React.Component {
    componentDidMount() {
        bindOnce('#intro > div', e => {
            e.target.classList.add('active');
        });
    }

    render() {
        return(
            <section id="intro" className="h-100">
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h1>WINDOW DATE PICKER</h1>
                    <p>JavaScript library for setting and choosing date and hour.</p>
                    <a href="https://github.com/cevadtokatli/window-date-picker">GET</a>
                </div>
            </section>
        );
    }
}