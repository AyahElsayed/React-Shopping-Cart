import React from 'react'
import './products.scss'
import { useState } from 'react'
import ProductModal from './productModal'

const Products = (props) => {
  const { products } = props
  const [product, setProdut] = useState("")

  const openModal = (product) => {
    setProdut(product)
  }

  const closeModal = () => {
    setProdut(false)
  }

  return (
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
          <button>Add to cart</button>
        </div>
      ))}

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  )
}

export default Products
