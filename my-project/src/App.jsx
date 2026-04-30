import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mnop from './Components/Mnop'
import New1 from './Components/New1'
import New1a from './Components/New1a'
import Num from './Components/Num'
import DarkLight from './Components/Darklight'
import LightDark from './Components/LightDark'
import Useeffect from './Components/Useeffect';
import New1b from './Components/New1b';
function App() {
  const a = "this is props data"//define data.

  return (
    <div>
      This is app
      {/* <Mnop data={a} /> */}
      {/* <New1/> */}
      {/* <New1a/> */}
      {/* pass props data to child component. */}
      {/* <Num/> */}
      {/* <DarkLight /> */}
      {/* <LightDark /> */}
      {/* <Useeffect/> */}
      <New1b/>
    </div>
  )
}
export default App


