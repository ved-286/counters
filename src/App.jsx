import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Add = () => {
    setCount(count +1)
  };

  return (
    <>
    <h1>count your number</h1>
    <h2>{count}</h2>

    <button onClick={Add}> Add value :{count}</button>
    <button onClick={remove}> remove value :{count}</button>
    </>
    
  )
}

export default App
