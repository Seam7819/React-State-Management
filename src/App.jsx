
import { useState } from 'react'
import './App.css'
import Friends from './friends';
import Countries from './Components/Countries/Countries';

function App() {
  const [count,setCount] = useState(0)

  const handleAdd = () =>{
    const newCount = count + 1;
    setCount(newCount)
  }

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount)
  }

  return (
    <>
      

      <Countries></Countries>
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add Count</button>
      <button onClick={handleReduce}>Reduce Count</button>

      <Friends>
      </Friends>
       
    </>
  )
}

export default App
