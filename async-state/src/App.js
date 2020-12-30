import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  //always add props incase you need to add props
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47 + this.props.increment
    }
    
  }

  //setState is asynchronous, update will not happen immediately
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
  },
    () => console.log(this.state.meaningOfLife))
    //console.log(this.state.meaningOfLife) notice always one behind in the console log, does not happen immediately
    //can address this with adding a callback function, but this is bad practice, only works because our app is so simple
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick = {this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }
}


export default App;
