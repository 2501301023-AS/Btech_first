import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Abcd from './Components/Abcd'
import Mnop from './Components/Mnop'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    This is app
<Mnop/>
  </div>
  )
}

export default App
