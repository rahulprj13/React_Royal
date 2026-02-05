import React from 'react'
import { Link } from 'react-router-dom'

const NetflixMovie = () => {
  
  let Movies = [
    {id:1, name:"yevdu"},
    {id:2, name:"yevdu2"},
    {id:3, name:"dhurandhar"},
    {id:4, name:"chhava"}
  ]

  return (
    <div style={{textAlign:"center"}}>
      <h1>NetflixMovie</h1>

      {Movies.map((m)=>{
        return <li key={m.id}>
          <Link to={`/watch/${m.name}`}>{m.name}</Link>
        </li>
      })}
    </div>
  )
}

export default NetflixMovie