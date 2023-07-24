import React, { useState, useEffect } from 'react'

const R031_ReactHook = props => {
  const [contents, setContesnts] = useState('[this is react]')

  useEffect(() => {
    console.log('useEffect')
  })
  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContesnts('[this is hook]')}>버튼</button>
    </div>
  )
}

export default R031_ReactHook
