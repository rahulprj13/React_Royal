import React from 'react'
import { useParams } from 'react-router-dom'

const Watch = () => {

    const name = useParams().name

  return (
    <div>
      <h1>Watching...{name}</h1>
    </div>
  )
}

export default Watch
