import React from 'react'
import { useState } from 'react'
import Filter from './components/filter/filter';
// import { words } from './staticWords';
import Products from './components/products/products';
import data from './data.json'
import Cart from './components/cart/Cart';

const Content = () => {
  const [products, setProduts] = useState(data)
  const [cartItem, setCartItem] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")


  const handleFilterBySize = (e) => {
    setSize(e.target.value)
    if (e.target.value === "ALL") {
      setProduts(data)
      // console.log(products)
    }
    else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) !== -1);
      console.log(newProducts)
      setProduts(newProducts)
    }
  }
  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order === "lowest") {
        return a.price - b.price
      } else if (order === "highest") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProduts(newProducts)
  }

  return (
    <div className='content'>
      <div className='wrapper'>
        <Products products={products} />
        <Filter
          productsNumber={ products.length}
          size={size}
          sort={sort}
          handleFilterByOrder={handleFilterByOrder}
          handleFilterBySize={handleFilterBySize}
        />
      </div>
      <Cart cartItem={cartItem}/>
    </div>
  )
}

export default Content
