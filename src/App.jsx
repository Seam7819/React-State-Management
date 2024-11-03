
import { useState } from 'react'
import './App.css'
import Friends from './friends';

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
      

      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add Count</button>
      <button onClick={handleReduce}>Reduce Count</button>

      <Friends>
      </Friends>
       
    </>
  )
}

export default App
