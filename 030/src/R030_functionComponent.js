import React from 'react'

const R030_functionComponent = ({ contents, test1 }) => {
  let test = [{ test01: 100 }, { test02: 101 }, { test03: 102 }]
  return (
    <div>
      <h2>{contents}</h2>
      <h2>{test1}</h2>
    </div>
  )
}
export default R030_functionComponent
