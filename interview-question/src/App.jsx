import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  const [multiplied, setMultiplied] = useState(1)

  

  const multiplybyfive = () => {
    setValue(value + 1)
    setMultiplied(value * 5)
    
  }

  // let multiplied = value * 5

  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={multiplybyfive}>click to multiply by 5</button>
      <h2>Multiplied value: {multiplied}</h2>
    </>
  )
}

export default App
