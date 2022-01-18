import React from 'react'
import './cart.scss'
import Checkout from './../checkOutForm/CheckOutForm';
import { useState } from 'react'


const Cart = (props) => {
  const { cartItem, removeFromCart } = props;

  const [showForm, setShowForm] = useState(false);

  const [value, setValue] = useState("")

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email
    }

    console.log(order);
  }

  const handleChange = (e) => {
    setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

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

      {cartItem.length !== 0 && (
        <div className='cartFooter'>
          <div className='total'> Total: ${cartItem.reduce((acc, p) => {
            return acc + p.price
          }, 0)}</div>
          <button onClick={() => setShowForm(true)}>select products</button>
        </div>
      )}

      {/* checkout form */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>

  )
}

export default Cart
