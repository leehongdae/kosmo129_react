import React, { Component } from 'react'

class R027_ComponentClass extends Component {
  render() {
    const element_Array = [<li>react</li>, <li>200</li>, <li>array map</li>]
    return
    <ul>
      {element_Array.map((array_val) => array_val})
    </ul>
  }
}

export default R027_ComponentClass
