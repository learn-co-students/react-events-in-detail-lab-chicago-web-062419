// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {



    handleEvent = event => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }


    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>

                </button>
            </div>
        );
    }
}

export default DelayedButton;