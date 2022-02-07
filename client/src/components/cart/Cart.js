import React from 'react'
import './cart.scss'
import Checkout from './../checkOutForm/CheckOutForm';
import { useState } from 'react'
import Bounce from 'react-reveal/Bounce'
import Modal from 'react-modal'

const Cart = (props) => {
  const { cartItem, removeFromCart } = props;

  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("")
  const [order, setOrder] = useState(false);

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email
    }
    setOrder(order);
  }

  const closeModal = () => {
    setOrder(false)
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
      {/* Modal */}
      <Modal isOpen={order} onRequestClose={closeModal}>
        <div className="order-info">
          <span className="close-icon" onClick={closeModal}> &times; </span>
          <p className="alert-success"> order done success </p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{order.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{order.email}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{cartItem.reduce((a, p) => {
                return a + p.price
              }, 0)}</td>
            </tr>
            <tr>
              <td>
                Selected Items:
              </td>
              <td>{cartItem.map(p => (
                <div className="cart-data">
                  <p>Number of this products: {p.qty}</p>
                  <p>Title of  products: {p.title}</p>
                </div>
              ))}</td>
            </tr>
          </table>
        </div>
      </Modal>
      <Bounce bottom cascade>
        <div>
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
      </Bounce>
      {
        cartItem.length !== 0 && (
          <div className='cartFooter'>
            <div className='total'> Total: ${cartItem.reduce((acc, p) => {
              return acc + (p.price * p.qty)
            }, 0)}</div>
            <button onClick={() => setShowForm(true)}>select products</button>
          </div>
        )
      }


      {/* checkout form */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div >

  )
}

export default Cart
