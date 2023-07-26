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
      inText: this.state.text,
    }

    fetch('http://localhost:3001/text', {
      method: 'post',
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
        <button onClick={this.onclick}>보내기</button>
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}

export default App
