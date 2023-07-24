import React from 'react'
import FunctionComponent from './R030_functionComponent'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <FunctionComponent
        contents="[THIS IS FUNCTION COMPONENT]"
        test1="객체구조할당"
      />
    </div>
  )
}

export default App
