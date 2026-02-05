import React from 'react'
import { Link } from 'react-router-dom'

const Iplteam = () => {
  let Teams = [
    {id:1, name:"csk"},
    {id:2, name:"gt"},
    {id:3, name:"mi"},
    {id:4, name:"rcb"}
  ]

  return (
    <div style={{textAlign:"center"}}>
      <h1>IplTeam</h1>

      {Teams.map((Team)=>{
        return <li key={Team.id}>
          <Link to={`/watch/${Team.name}`}>{Team.name}</Link>
        </li>
      })}
    </div>
  )
}

export default Iplteam
