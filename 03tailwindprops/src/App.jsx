import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    user:"arsh",
    age:21
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-6 rounded-xl mb-6'>Tailwind Test </h1>
      {/* <Card name=" arsh " someObj={myObj} new ={newArr} />
      <Card name=" krishna " someObj={myObj} new ={newArr}/> */}
      <Card name="Arsh " age="21" loc="Aus" gender="M" />
      <Card name="Krishna " age="22" loc="Ind" gender="M"/>
    </>
  )
}

export default App
