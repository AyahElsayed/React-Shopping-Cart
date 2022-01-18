import React from 'react'
import './filter.scss'

const Filter = (props) => {
  const { handleFilterBySize, size, handleFilterByOrder, sort } = props
  return (
    <div className='filter'>
      <h2 className='filterTitle'> Filter</h2>
      <div className='numOfProducts'> Number of products</div>
      <div className='filterBySize'>
        <span>Filter</span>
        <select value={size} className='filterSelsect' onChange={handleFilterBySize}>
          <option value="ALL">ALL</option>
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
        <select value={sort} className='filterSelsect' onChange={handleFilterByOrder}>
          <option value="lastest">Lastest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
