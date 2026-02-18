import axios from 'axios'
import React, { useState } from 'react'
import MoviesApi from './MoviesApi'
import MovieGrid from './MovieGrid'
import PostApi from './PostApi'

const Productcalli = () => {

    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false)

    const getProduct = async() => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response.data);
        console.log(response.data.products);
        setProducts(response.data.products)
        
    }

  return (
    <div>
      <h1>Product calling</h1>
      <button onClick={getProduct}>getProduct</button>

      {products.length>0 &&

      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>category</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
}
{/* <MoviesApi/> */}
{/* <MovieGrid/> */}
    <PostApi/>
    </div>
  )
}

export default Productcalli
