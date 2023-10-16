import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUS } from '../store/productSlice'

function Products() {
    // const [products,setProducts]= useState([])
    const dispatch=useDispatch()
    const {data:products,status}=useSelector(state => state.product)
    // const url='https://fakestoreapi.com/products'
    useEffect(()=>{
        // const fetchData=async()=>{
        //     const res=await fetch(url)
        //     const data=await res.json()
        //     // console.log(data);
        //     setProducts(data)
        // }
        // fetchData()
        dispatch(fetchProducts())
    },[])

    

    const handleAdd = (product) =>{
        dispatch(add(product))
    }

    if (status === STATUS.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUS.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

  return (
    <div className='productsWrapper'>
        {
            products.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button className='btn' onClick={()=>handleAdd(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products