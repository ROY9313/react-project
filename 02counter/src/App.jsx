import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    // console.log("value addded", Math.random());
    // console.log("clicked", counter);
    // counter = counter +1
    // counter = counter +1
    // counter = counter +1
    counter = counter +1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    }

    const removeValue = () => {
      // console.log("clicked", counter);
      // counter = counter -1
      setCounter(counter - 1)
    }

    // condition after 20 stop counting and after 0 stop counting
    // if (counter > 20){
    //   setCounter(counter);
    // }
    // else if(counter < 0){
    //   setCounter(counter -1);
    // }


  return (
    <>
      <h1>react learning</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>    
  )
}

export default App;
