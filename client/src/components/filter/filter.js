import React from 'react'
import './filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
      <h2 className='filterTitle'> Filter</h2>
      <div className='numOfProducts'> Number of products</div>
      <div className='filterBySize'>
        <span>Filter</span>
        <select className='filterSelsect'>
          <option value="All">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>

      <div className='filterOrder'>
        <span>Order</span>
        <select className='filterSelsect'>
          <option value="lastest">Lastest</option>
          <option value="lower">Lower</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
