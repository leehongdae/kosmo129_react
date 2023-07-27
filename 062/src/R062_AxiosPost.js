import React, { Component } from 'react'
import axios from 'axios'

class R062_AxiosPost extends Component {
  componentDidMount() {
    axios
      .post('http://date.jsontest.com/', { a: 'react', b: 200 })
      .then(res => {
        alert('>>>' + res.data.date)
        console.log('>>>' + res.data.date)
      })
  }
  render() {
    return (
      <div>
        <h1>Axios.post Test</h1>
      </div>
    )
  }
}

export default R062_AxiosPost
