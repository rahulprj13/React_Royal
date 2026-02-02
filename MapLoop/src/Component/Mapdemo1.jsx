import React from 'react'

const Mapdemo1 = () => {
    let users=[
        {id:1, name:"Alice", age:25},
        {id:2, name:"Bob", age:30},
        {id:3, name:"Charlie", age:35}
    ]
  return (
    <div>
      <h1>Mapdemo1</h1>
      {users.map((user)=>{
        return <li>{user.id}-{user.name}-{user.age}</li>
      })}
    </div>
  )
}

export default Mapdemo1
