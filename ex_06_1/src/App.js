import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import EmpForm from './components/EmpForm'
import Empselect from './components/EmpSelect'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}></Route>
              <Route path="empform" element={<EmpForm />}></Route>
              <Route path="empselect" element={<Empselect />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App
