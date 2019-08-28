// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
         //this component takes in 2 props:
        //1. onDelayedClick (a function), 2. delay (a number).
   
    handleDelay = event => {
        event.persist();//<<from solution, otherwise test would not pass
        //when clicked: will pass the click event to the onDelayedClick prop within a setTimeout()
        //The setTimeout() should be set to this.props.delay.
        const delay = this.props.delay
        setTimeout(() => {
            this.props.onDelayedClick(event)
          }, delay);
    }
    render() { 
        return ( 
            //Create a button
            <button onClick={this.handleDelay}>Button</button>
         );
    }
}
 
export default DelayedButton;
