import React from 'react'
import { useState,useEffect } from 'react'
const Num = () => {
  const[Number,setNumber]=useState(0)
  return (
    <div>
        <h1>{Number}</h1>
     <button onClick={()=>setNumber(Number+1)}>increase+</button>  
     <button onClick={()=>setNumber(Number-1)}>decrease-</button>
    </div>
  )
}

export default Num
