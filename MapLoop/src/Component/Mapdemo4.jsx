import React from 'react'
import img from "../assets/image/c.png"
import img5 from "../assets/image/c++.png"
import img2 from "../assets/image/java.jpg"
import img4 from "../assets/image/c.png"
export function Mapdemo4() {

      let books =[
        {id:1, name:"c", price:100.00, imgUrl:img},
        {id:2, name:"java", price:200.00, imgUrl:img2},
        {id:3, name:"python", price:300.00, imgUrl:""},
        {id:4, name:"html", price:100.00, imgUrl:""},
        {id:5, name:"c++", price:150.00, imgUrl:img5},
    ]

  return (
    <div>
      <h1>Mapdemo4</h1>
<table border="2" width={300} cellSpacing={0} cellPadding={3}>
        <thead>
          
        <tr>
            <th>id</th>
            <th>book</th>
            <th>price</th>
            <th>img</th>
        </tr>
        </thead>
        {books.map((book)=>{
            return <tbody key={book.id} >     
            <tr>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td style={{backgroundColor:(book.price >= 200)&& "orange"}}>{book.price}</td>
                <td style={{color:(book.imgUrl=="") && "red" }}>{book.imgUrl == "" ? <h4>This is {book.name}</h4>:<img src={book.imgUrl} width={100} height={100}/>}</td>
            </tr>
            </tbody>
        })}
      </table>
    </div>
  )
}
