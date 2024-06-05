import  { useState } from 'react'

const Counter = () => {
    const[count, setCount]=useState(0)
    const handleCountIncrement=()=>{
        setCount(count + 1)
    }

    const handleCountDecrement=()=>{
        setCount(count - 1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleCountIncrement}>Add</button>
        <button onClick={handleCountDecrement}>Delete</button>
    </div>
  )
}

export default Counter