import React from 'react'

const Mapdemo2 = () => {
    let students=[
        {id:1, name:"rahul", city:"patan"},
        {id:2, name:"montu", city:"mehsana"},
        {id:3, name:"raj", city:"ahmedabad"},
        {id:4, name:"rajat", city:"patan"},
        {id:5, name:"kiran", city:"deesa"}
    ]
  return (
    <div>
      <h1>Mapdemo2</h1>
      <table border="2">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>city</th>
        </tr>
        {students.map((st)=>{
            return <tr>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.city}</td>
            </tr>
        })}
      </table>
    </div>
  )
}

export default Mapdemo2
