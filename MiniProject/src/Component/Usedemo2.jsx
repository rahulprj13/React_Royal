import React, { useState } from 'react'

const Usedemo2 = () => {

    const [loading, setLoading] = useState(false)

    const stop = () =>{
        setLoading(false)
    }
    const start = () =>{
        setLoading(true)
    }

  return (
    <div>
      <h1>Usedemo2</h1>

     {loading == true && <h1>loading...</h1>}
      {!loading == false && <button onClick={stop}>stop</button>}
      {loading == false && <button onClick={start}>start</button>}
    </div>
  )
}

export default Usedemo2