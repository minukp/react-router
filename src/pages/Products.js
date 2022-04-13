import React from 'react'
import {data} from '../data'
import { Link } from 'react-router-dom'

const Products = () => {

  return (
    <div className="container">
       <h2 className='title'>Products</h2> 
       <div className="products">
           {data.map((product)=>{
               return <article key={product.id}>
                   <h2>{product.name}</h2>
                   <p>Price : Rs {product.price}</p>
                   <button className='btn'>
                       <Link to={`/products/${product.id}`}>
                       Explore
                       </Link>
                    </button>
               </article>
           })}
       </div>
    </div>
  )
}

export default Products