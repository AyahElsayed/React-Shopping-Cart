import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Content from './content'
import { Provider } from 'react-redux'
import store from './store/store';

const Layout = () => {
  return (
    <Provider store={store}>
      <div className='layout'>
        <Header />
        <Content />
        <Footer />
      </div>
    </Provider>
  )
}

export default Layout
