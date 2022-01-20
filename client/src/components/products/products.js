import React from 'react'
import './products.scss'
import { useState } from 'react'
import ProductModal from './productModal'
import Bounce from 'react-reveal/Bounce'

const Products = (props) => {
  const { products, addToCart } = props
  const [product, setProdut] = useState("")

  const openModal = (product) => {
    setProdut(product)
  }

  const closeModal = () => {
    setProdut(false)
  }

  return (
    <Bounce left cascade>
      <div className='products'>
        {products.map((product) => (
          <div className='product_item' key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.title} />
            </a>
            <div className='product_desc'>
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}

        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  )
}

export default Products
