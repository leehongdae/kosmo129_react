import React, { Component } from 'react'

class R060_FetchPost extends Component {
  conponentDidMount = async () => {
    const response = await fetch('http://localhost:3001/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { a: 'react', b: 200 },
    })
    const body = await response.json()
    alert(body.date)
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        <h1>Test</h1>
      </div>
    )
  }
}

export default R060_FetchPost
