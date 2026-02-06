import React, { useState } from 'react'

const Usedemo3 = () => {

    const [name, setName] = useState(["rahul","montu"])

    const add =()=>{
        setName([...name,"raj"])
    }

  return (
    <div>
      <h1>Usedemo3</h1>
      {name.map((n) =>{
        return <li>{n}</li>
      })}
      <button onClick={add}>add</button>
    </div>
  )
}

export default Usedemo3
