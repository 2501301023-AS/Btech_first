import React from 'react'
import Abcd from './Abcd'

const Mnop = ({data}) => {
  return (
    <div>
      <h1>{data}</h1>
      <Abcd b={data}/>
    </div>
  )
}

export default Mnop
