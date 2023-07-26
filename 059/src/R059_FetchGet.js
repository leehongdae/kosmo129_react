import React, { Component } from 'react'

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com/')
    const body = await response.json()
    alert(body.date)
  }
  render() {
    return (
      <div>
        <h1>Test FetchGet</h1>
      </div>
    )
  }
}
export default R059_FetchGet
