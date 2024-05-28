import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded-3xl">

      <button 
      onClick={() => setColor("red")}
      className="outline-none px-4 rounded-xl w-18 text-white"
      style={{backgroundColor: "red"}}
      >Red</button>
      <button 
      onClick={() => setColor("Green")}
      className="outline-none bg-green-400 px-4 rounded-xl w-18"
      style={{backgroundColor: "Green"}}
      >Green</button>
      <button 
      onClick={() => setColor("Blue")}
      className="outline-none bg-blue-400 px-4 rounded-xl w-18 text-white"
      style={{backgroundColor: "Blue"}}>
      Blue</button>
      <button
      onClick={() => setColor("Yellow")}
      className="outline-none bg-yellow-400 px-4 rounded-xl w-18"
      style={{backgroundColor: "Yellow"}}>
      Yellow</button>
      <button
      onClick={() => setColor("Orange")}
      className="outline-none bg-orange-400 px-4 rounded-xl w-18 text-white"
      style={{backgroundColor: "Orange"}}>
      Orange</button>
      <button 
      onClick={() => setColor("Pink")}
      className="outline-none bg-pink-400 px-4 rounded-xl w-18 "
      style={{backgroundColor: "Pink"}}>
      Pink</button>
      

      

    </div>
    </div>
    </div>
  );
}

export default App
