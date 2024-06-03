import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component2/>
      <Component3/>
    </>
  )
}

export default App
