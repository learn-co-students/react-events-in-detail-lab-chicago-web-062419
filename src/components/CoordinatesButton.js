// Code CoordinatesButton Component Here
import React, {Component} from 'react'


export default class CoordinatesButton extends Component{
    doTheClick = (event)=>{
        //console.log([event.clientX , event.clientY])
        this.props.onReceiveCoordinates([event.clientX , event.clientY]);
    }
    render(){
        return<button onClick={this.doTheClick}>Client-Coordinates</button>
    }
}

CoordinatesButton.defaultProps = {
    onReceiveCoordinates: null
}

