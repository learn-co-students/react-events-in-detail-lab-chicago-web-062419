// Code DelayedButton Component Here

//If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.

import React, { Component } from 'react'

class DelayedButton extends React.Component {

    handleEvent = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)}, this.props.delay) //setTimeout(function, time)
    }

    render() { 
        return ( 
            <button onClick={this.handleEvent}>
            Button
            </button>
         );
    }
}
 
export default DelayedButton;