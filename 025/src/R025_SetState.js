import React, { Component } from 'react'

class R025_SetState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      StateString: 'react',
    }
  }

  StateChange = flag => {
    if (flag == 'direct') this.state.StateString = 'react'
    if (flag == 'setstate') this.setState({ StateString: 'react' })
  }

  render() {
    return (
      <div style={{ padding: '0px' }}>
        <button onClick={e => this.StateChange('direct', e)}>
          state 직접입력
        </button>
        <button onClick={e => this.StateChange('setstate', e)}>
          state 직접입력
        </button>
        <br></br>
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    )
  }
}

export default R025_SetState
