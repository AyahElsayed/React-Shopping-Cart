import React from 'react'
import './filter.scss'
import Flip from 'react-reveal/Flip'
import {connect} from 'react-redux';
import { filteredSize, filteredSort } from '../../store/actions/products'

const Filter = (props) => {
  const { handleFilterBySize, size, handleFilterByOrder, sort, productsNumber, filterProducts, filteredSize, filteredSort } = props
  return (
    <Flip left>
      {filterProducts &&
        <div className='filter'>
          <h2 className='filterTitle'> Filter</h2>
          <div className='numOfProducts'> Number of products {filterProducts.length}</div>
          <div className='filterBySize'>
            <span>Filter</span>
            <select value={size} className='filterSelsect' onChange={(e) => filteredSize(props.products, e.target.value)}>
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
            <select value={sort} className='filterSelsect' onChange={(e) => filteredSort(props.filterProducts, e.target.value)}>
              <option value="lastest">Lastest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>}
    </Flip>
  )
}

export default connect( (state) => {
  return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts
  }
}, {
  filteredSize,
  filteredSort
} )(Filter);