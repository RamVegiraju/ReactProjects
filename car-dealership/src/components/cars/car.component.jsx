import React, { Component } from 'react';

//Using a function to define a Component
/*
export function Car(props) {
    return <h1>You picked a: {props.carName}</h1>
}*/


//Using an ES6 class to define a Component

export class Car extends Component {
    render() {
    return <h1>You picked a: {this.props.carName}. You bought this car at: {this.props.carDealership}</h1>
    }
}