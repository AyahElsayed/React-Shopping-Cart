import React from 'react'
import './cart.scss'

const Cart = (props) => {
  const { cartItem } = props;

  return (
    <div className='cart'>
      <div className='cartTitle'>
        Empty Card
      </div>
      {cartItem.map(item => (
        <div className='cartItem' key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <div className='cartInfo'>
            <div className='cartDesc'>
              <p>{item.title}</p>
              <p>qty</p>
              <p>{item.price}</p>
            </div>
            <button>Remove</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Cart
