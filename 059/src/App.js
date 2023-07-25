import React, { Component } from 'react'

class App extends Component {
  state = {
    text: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onclick = () => {
    const textbox = {
      intext: this.state.text,
    }
    fetch('http://localhost:3001/text', {
      method: 'port',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(textbox),
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} name="text" />
        <button onChange={this.onclick}>send</button>
      </div>
    )
  }
}

export default App
