import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mnop from './Components/Mnop'
function App() {
  const a = "this is props data"//define data.

  return (
    <div>
      This is app
      <Mnop data={a} />
      {/* pass props data to child component. */}
    </div>
  )
}

export default App
