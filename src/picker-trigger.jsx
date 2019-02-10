import React from 'react';

export default class PickerTrigger extends React.Component {
    render() {
        return(
            <i className={`far fa-calendar icon-${this.props.color}`} aria-hidden="true" />
        )
    }
}