import React, { Component } from 'react'
import axios from 'axios'

class R060_AxiosGet extends Component {
  componentDidMount() {
    axios.get('http://date.jsontest.com/').then(response => {
      alert(response.data.date)
      console.log(
        '>>> millisenconds : ' + response.data.milliseconds_since_epoch
      )
      console.log('>>> time : ' + response.data.time)
    })
  }
  render() {
    return (
      <div>
        <h1>axios get</h1>
      </div>
    )
  }
}

export default R060_AxiosGet
