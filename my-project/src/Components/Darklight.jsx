import React from 'react'
import { useState } from 'react'
const Darklight = () => {
  const[color,setcolor]=useState("red")
  return (
    <div style={{backgroundColor:color,height:'60vh'}}>
      <button onClick={()=>setcolor("black")}>black</button>
      <button onClick={()=>setcolor("white")}>white</button>
      <button onClick={()=>setcolor("green")}>Green</button>
      <button onClick={()=>setcolor("blue")}>Blue</button>
        <button onClick={()=>setcolor("yellow")}>yellow</button>
        <button onClick={()=>setcolor("pink")}>pink</button>
        <button onClick={()=>setcolor("orange")}>orange</button>
        <button onClick={()=>setcolor("gold")}>gold</button>
     
    </div>
  )
}

export default Darklight
