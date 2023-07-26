import React, { Component } from "react";
import './App.css';
import logo from './logo.svg';
import Counter from './Counter.js'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        number: 0
      };
  }

  handleIncrease= () => {
    const { number } = this.state;

    this.setState({
      number:number + 1
    });
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Counter
          handleIncrease={this.handleIncrease}
          number={this.state.number}
          />  
        </header>
      </div>
    );
  }
}
export default App;