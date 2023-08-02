import React, { useState } from 'react'
import axios from 'axios'

const EmpSelect = () => {
  const [data, setData] = useState(null)

  const onClick = () => {
    axios.get('http://localhost:5000/select').then(res => {
      setData(res.data)
    })
  }
  return (
    <div>
      <div>
        <h3>Emp Select</h3>
        <button onClick={onClick}>loding</button>
      </div>
      {data && (
        <div>
          <br />
          EMPNO : {} <br />
          ENAME : {} <br />
          JOB : {} <br />
        </div>
      )}
    </div>
  )
}

export default EmpSelect
