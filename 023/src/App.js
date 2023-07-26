import React from 'react'
import './App.css'
import PropsNode from './R023_PropsNode'

function App(props) {
  return (
    <div>
      <h1>Strat React 2001</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  )
}

export default App
