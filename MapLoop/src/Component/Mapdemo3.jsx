import React from 'react'

const Mapdemo3 = () => {

    let citys =[
        {id:1, city:"patan", pop:10000, state:"gujarat"},
        {id:2, city:"delhi", pop:1000000, state:"delhi"},
        {id:3, city:"mumbai", pop:1050000, state:"maharastra"},
        {id:4, city:"ahmedabad", pop:105000, state:"gujarat"},
        {id:5, city:"jaipur", pop:1110000, state:"rajsthan"},
        {id:6, city:"bangluru", pop:200000, state:"karnatak"}
    ]
  return (
    <div>
      <h1>Mapdemo3</h1>

      <table border="2">
        <thead>
          
        <tr>
            <th>id</th>
            <th>city</th>
            <th>pop</th>
            <th>state</th>
        </tr>
        </thead>
        {citys.map((city)=>{
            return <tbody key={city.id}>     
            <tr>
                <td>{city.id}</td>
                <td>{city.city}</td>
                <td>{city.pop}</td>
                <td style={{backgroundColor:(city.state=="gujarat")?"red" : "white"}}>{city.state}</td>
            </tr>
            </tbody>
        })}
      </table>
    </div>
  )
}

export default Mapdemo3
