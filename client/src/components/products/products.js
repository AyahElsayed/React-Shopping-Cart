import React from 'react'
import './products.scss'

const Products = (props) => {
  const { products } = props
  console.log('products', products)
  return (
    <div className='products'>
      {products.map((product) => (
        <div className='product_item' key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className='product_desc'>
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products
