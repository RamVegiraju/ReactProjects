import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Car } from './components/cars/car.component'

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>This is a dealership demo.</h1>
        <Car carName = "BMW" carDealership = "CarMax"/>
      </div>
    )
  }


}


export default App;
