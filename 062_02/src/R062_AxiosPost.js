import React, { Component } from 'react'
import axios from 'axios'

class R062_AxiosPost extends Component {
  state = {
    text: '',
  }

  componentDidMount = async () => {
    const res = await fetch('http://localhost:3001/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(test),
    })
    console.log('>>> date : ' + res.formData.date)
  }
  render() {
    return (
      <div>
        <h1>Axios.post Test</h1>
        <button onClick></button>
      </div>
    )
  }
}

export default R062_AxiosPost
