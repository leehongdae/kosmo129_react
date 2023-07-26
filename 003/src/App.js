import React from "react"

class Test1 extends React.Component {
  render() {
    return (
      <div> Test1 Component </div>
    );
  }
}

class Test2 extends React.Component {
  render() {
    return (
      <div> Test2 Component </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div> This is Class Component!! 
        <Test1/>   
        <Test2/>
      </div>
    );
  }
}

export default App;