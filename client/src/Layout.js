import React from 'react'
import Footer from './components/Footer'
import Header from './components/header/Header'
import Content from './content'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
