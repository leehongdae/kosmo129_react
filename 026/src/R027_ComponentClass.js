import React, { Component } from 'react'

class R027_ComponentClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      StateString: 'react',
      StateArrayObj: ['react', { react: '200' }],
    }
  }

  buttonclick = type => {
    if (type === 'String') {
      this.setState({ StateString: 'react' })
    } else {
      this.setState({ StateArrayObj: ['react', { react: '200' }] })
    }
  }
  render() {
    console.log('render() function excute')
    return (
      <div>
        <button onClick={e => this.buttonclick('String')}>문자열변경</button>
        <button onClick={e => this.buttonclick('ArrayObject')}>
          객체 배열 변경
        </button>
      </div>
    )
  }
}

export default R027_ComponentClass
