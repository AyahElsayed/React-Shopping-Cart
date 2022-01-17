import React from 'react'
import './footer.scss'
import { words } from './../../staticWords';

const Footer = () => {
  return (
    <div className='footer'>
      {words.footerTitle}
    </div>
  )
}

export default Footer
