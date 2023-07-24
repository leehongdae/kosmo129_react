import React, { Component } from 'react'

class R028_PurecomponentClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      StateString: 'react',
      StateArrayObj: ['react', { react: '200' }],
    }
  }

  buttonClick = type => {
    if (type === 'String') {
      this.setState({ StateString: 'react' })
    } else {
      this.setState({ StateArrayObj: ['react', { react: '200' }] })
    }
  }

  render() {
    console.log('render() ')
    return (
      <div>
        <button
          onClick={e => {
            console.log('render() ssssssssssssssssssssss')
            this.buttonClick('String')
          }}
        >
          문자열변경
        </button>
        <button
          onClick={e => {
            console.log('render() 실행?? 이게??')
            this.buttonClick('ArrayObject')
          }}
        >
          객체배열 변경변경
        </button>
      </div>
    )
  }
}

export default R028_PurecomponentClass
