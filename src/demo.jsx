import React from 'react';
import {bindOnce} from 'dom-display-detector';
import PickerInput from './picker-input';
import PickerTrigger from './picker-trigger';
import WindowDatePicker from 'window-date-picker-react';

export default class Demo extends React.Component {
    componentDidMount() {
        bindOnce('.container > h1', e => {
            e.target.classList.add('active');
        });

        bindOnce('.container > div > div > *', e => {
            e.target.classList.add('active');
        });
    }

    render() {
        return(
            <section id="demo">
                <div className="container">
                    <h1>DEMO</h1>
                    <hr />
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div id="datehour-picker">
                                <div className="input-container">
                                    <PickerInput />
                                    <PickerTrigger color="purple" />
                                </div>
                                <WindowDatePicker value={new Date()} type="DATEHOUR" className="wdp-purple" inputEl="#datehour-picker .input-container input" toggleEl="#datehour-picker > .input-container i" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div id="date-picker">
                                <div className="input-container">
                                    <PickerInput />
                                    <PickerTrigger color="blue" />
                                </div>
                                <WindowDatePicker value={new Date()} inputEl="#date-picker .input-container input" toggleEl="#date-picker > .input-container i" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div id="hour-picker">
                                <div className="input-container">
                                    <PickerInput />
                                    <PickerTrigger color="red" />
                                </div>
                                <WindowDatePicker value={new Date()} type="HOUR" className="wdp-red" inputEl="#hour-picker .input-container input" toggleEl="#hour-picker > .input-container i" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}