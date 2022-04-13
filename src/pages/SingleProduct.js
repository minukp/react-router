import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {data} from  '../data'

const SingleProduct = () => {
    const {id} = useParams();
    console.log(typeof(id),"type of id")
    const product = data.find((product)=>product.id == id);
    //console.log(prod);
  return (
    <div className='container'>
        <h2>Product :{product.name}</h2>
        <h3>Price : Rs {product.price}</h3>
        <p>type of id : {typeof(product.id)}</p>
        

        <Link to="/products">Back to products</Link>
    </div>
  )
}

export default SingleProduct