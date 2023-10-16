import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart() {
  const cartItems=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  const removeHandler = (productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart Items</h3>
      <div className='cartWrapper'>
        {
          cartItems.map(product=>(
            <div className='cartCard' key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=>removeHandler(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart