import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// counter project using hooks 

function App() {

  let [counter, setCounter] = useState(15) // counter and setCounter are the names they might be different

  // let counter = 15;

  const addValue= ()=>{
    console.log("CLicked: "+ counter);
    if(counter < 30){
       setCounter(counter=>counter+1); 
        setCounter(counter=>counter+1); 
        setCounter(counter=> counter+1);
    }
     
    
  }

  const removeValue = ()=>{
    // if(counter>0) counter -= 1;
    // setCounter(counter);
    if(counter>0){
      setCounter(counter=>counter-1);
      setCounter(counter=>counter-1);
      setCounter(counter=>counter-1);
    }
  }
  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
