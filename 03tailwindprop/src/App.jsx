import { useState } from 'react'
import './App.css'
import Card from './componets/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userame: "dip",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-3'>hello world</h1>
     <Card username= "chai aur code"  btnText= "Click me"/>
     <br />
     <Card username= " dip roy"  />
    </>
  )
}

export default App
