import React, {Component} from 'react';
//importing card component/function
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
 
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
      monsters: [],
      //want to store the string we search in the search box to filter out our monsters
      searchField: ''
    };

    //bind is a method on any function that returns a new function where context of this is set to whatever we pass
    //if we do not use arrow functions
    //this.handleChange = this.handleChange.bind(this)
  }

  //lifecycle method through our class Component
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }


  //handlaChange method
  //arrow Functions automatically set context for this
  //lexical scoping
  //can write class methods with arrow function syntax instead of the binding code
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  //note setState is an asynchronous function
  //second argument of setState is a callback function to log/see the search results after setState has been executed
  
  render() {
    //filtering monsters array based off of search page
    //need to destructure array
    //creates two variables of monsters and search field
    //same as
    //const monsters = this.state.monsters
    //const searchField = this.state.searchField
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />

        <CardList 
          monsters={filteredMonsters}>
        </CardList>

    </div>
    );
  }
}

export default App;