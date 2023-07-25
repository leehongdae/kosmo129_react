import React, { Component } from 'react'

class App extends Component {
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
    return <div></div>
  }
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
export default App
