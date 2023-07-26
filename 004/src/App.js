
import React, { Component } from "react"
import Hello from './hello.js'

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Hello text="React"></Hello>
      </div>
    );
  }
}

export default App;