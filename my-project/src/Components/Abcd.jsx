import React from 'react'
import Xyz from "./Xyz";
const Abcd = ({ b }) => {
  return (
    <div>
     this is abcd
     <h3>{b}</h3>
     <Xyz c={b}/>
    </div>
  )
}

export default Abcd
