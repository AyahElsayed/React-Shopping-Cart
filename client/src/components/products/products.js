import React from 'react'
import './products.scss'
import { useEffect, useState } from 'react'
import ProductModal from './productModal'
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/actions/products';

const Products = (props) => {
  const { products, addToCart ,fetchProducts} = props
  const [product, setProduct] = useState("")

  const openModal = (product) => {
    setProduct(product)
  }

  const closeModal = () => {
    setProduct(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <Bounce left cascade>
      <div className='products'>
        {products && products.length ? products.map((product) => (
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
        )) : "loading.."}

        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  )
}

export default connect((state) => {
  return {
    products: state.products.filterProducts
  }
}, { fetchProducts })(Products)