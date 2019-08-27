// Code CoordinatesButton Component Here
import React, { Component } from 'react';

// onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) }
export default class CoordinatesButton extends Component {

    clickEvent = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        // console.log(mouseArray);
        // return mouseArray
    }

    render() {
        return(
            <button onClick={this.clickEvent}>button</button>
        )
    }
}