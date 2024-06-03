import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'
import Component4 from './Components/Component4'
import Component5 from './Components/Component5'
import Component6 from './Components/Component6'
import Component7 from './Components/Component7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      <Component6/>
      <Component7/>
    </>
  )
}

export default App
