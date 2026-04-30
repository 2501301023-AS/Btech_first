import React from 'react'
import { useState } from 'react'
const LightDark = () => {
    const [colors, setcolors] = useState("white")
    return (
        <div style={{ backgroundColor: colors === "white" ? "white" : "black", height: '60vh', color: colors === "white" ? "black" : "white" }}>

            <p>This is mode is {colors} {"  "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam odio officia consequatur eos numquam, suscipit reiciendis facere ratione perferendis sequi eum nemo tempor libero enim illo saepe aspernatur explicabo?</p>

            <button onClick={() => setcolors("black")}>black</button>
            <button onClick={() => setcolors("white")}>white</button>

        </div>
    )
}

export default LightDark
