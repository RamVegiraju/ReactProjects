import React, {Component} from 'react';
//importing card component/function
import { CardList } from './components/card-list/card-list.component'
import './App.css';

///STATE AND COMPONENT
//to use classes need to inherit from Component
//A React Component serve the same purpose as a JS function, work in isolation and return HTML via the render function
//Components come in two types: Class Components and Function components
//The STATE object is where you store property values that belong to the component

class App extends Component {
  //component gives a property setProperty
  //constructor gives us access to this.state and Componenet class
  constructor() {
    super();

    //use a state object with this.state.propertyName
    //setState takes an object with all the properties you want to change

    //monsters rolodox
    //array of monster objects
    //need an ID so we can have a key, so we can understand which element the HTML is associated with, do not have to re-render everything
    //real world scenario won't be hardcoding these examples

    //now we want our monsters state to be empty initially and we will update after the fetch call
    this.state = {
      monsters: []
    };
  }

  //lifecycle method through our class Component
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  
  render() {
    return (
      <div className="App">
      <CardList monsters={this.state.monsters}></CardList>
    </div>
    );
  }
}

export default App;