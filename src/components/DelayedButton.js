// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{
    constructor(props){
        super(props)
    }
    handleDelay = (event)=>{
        //console.log(event.type)
        const myType = event.type
        setTimeout(()=>{
            this.props.onDelayedClick(myType)
        } , this.props.delay)
    }
    render(){
        return <button onClick={this.handleDelay}>Delayed</button>
    }
}
