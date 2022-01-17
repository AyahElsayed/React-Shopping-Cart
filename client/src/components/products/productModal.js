import React from 'react'
import Modal from 'react-modal'

const ProductModal = (props) => {
  const {product , closeModal} = props
  return (
    <div>
      <Modal isOpen={product} onRequestClose={closeModal}>
        <span className='closeIcon' onClick={closeModal}> &times; </span>
        <div className='product_info'>
          <img src={product.imageUrl} alt={product.title} />
          <span>{product.title}</span>
          <span>{product.desc}</span>
          <span>${product.price}</span>
        </div>
      </Modal>
    </div>
  )
}

export default ProductModal
