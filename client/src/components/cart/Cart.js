import React from 'react'
import './cart.scss'

const Cart = (props) => {
  const { cartItem, removeFromCart } = props;

  return (
    <div className='cart'>
      <div className='cartTitle'>
        {cartItem.length === 0 ?
          "cart empty"
          :
          <p>There is {cartItem.length} products in cart</p>
        }
      </div>
      {cartItem.map(item => (
        <div className='cartItem' key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <div className='cartInfo'>
            <div className='cartDesc'>
              <p>title: {item.title}</p>
              <p>qty: {item.qty}</p>
              <p>price: ${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Cart
