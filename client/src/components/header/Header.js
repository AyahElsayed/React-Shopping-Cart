import React from 'react'
import './header.scss'
// import {words} from '../../staticWords'
import { words } from './../../staticWords';

const Header = () => {
  return (
    <div className='header'>
      {words.headerTitle}
    </div>
  )
}

export default Header
