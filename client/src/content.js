import React from 'react'
import { useState, useEffect } from 'react'
import Filter from './components/filter/filter';
// import { words } from './staticWords';
import Products from './components/products/products';
import data from './data.json'
import Cart from './components/cart/Cart';

const Content = () => {
  const [products, setProducts] = useState([])
  const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cartItem')) || []);
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")


  const handleFilterBySize = (e) => {
    setSize(e.target.value)
    if (e.target.value === "ALL") {
      setProducts(data)
      // console.log(products)
    }
    else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) !== -1);
      console.log(newProducts)
      setProducts(newProducts)
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
    setProducts(newProducts)
  }

  const addToCart = (product) => {
    const cartItemsClone = [...cartItem];
    var isProductExist = false;
    cartItemsClone.forEach(p => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    })
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 })
    }
    setCartItem(cartItemsClone);
  }

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItem];
    setCartItem(cartItemsClone.filter(p => p.id !== product.id))
  }

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <div className='content'>
      <div className='wrapper'>
        <Products  addToCart={addToCart} />
        <Filter
          productsNumber={products.length}
          size={size}
          sort={sort}
          handleFilterByOrder={handleFilterByOrder}
          handleFilterBySize={handleFilterBySize}
        />
      </div>
      <Cart cartItem={cartItem} removeFromCart={removeFromCart} />
    </div>
  )
}

export default Content
