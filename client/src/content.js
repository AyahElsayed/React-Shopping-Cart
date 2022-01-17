import React from 'react'
import { useState } from 'react'
// import { words } from './staticWords';
import Products from './components/products/products';
import data from './data.json'

const Content = () => {
  const [products, setProduts] = useState(data)
  console.log(products)
  return (
    <div className='content'>
      <div className='wrapper'>
        <Products products={products} />
        <div className='filter'>
          filter
        </div>
      </div>
    </div>
  )
}

export default Content
