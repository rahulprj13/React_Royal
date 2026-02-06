import React, { useState } from 'react'

const Usedemo1 = () => {

    const [count, setCount] = useState(0)

    const add=()=>{
        setCount(count+1);
    }

    const Dec=()=>{
        if(!count == 0)
            setCount(count-1);
    }
  return (
    <div>
      <h1>Usedemo1</h1>
      <h2>count {count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={Dec}>Decrement</button>
    </div>
  )
}

export default Usedemo1
