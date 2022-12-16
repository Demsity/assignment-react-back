import React, { useEffect, useState } from 'react'
import { useCart } from '../Contexts/CartContext'
import { ProductInterface } from '../Utilities/Interfaces'

interface CartProductProps {
  product: ProductInterface
}

function CartProduct({ product }:CartProductProps) {
  const [quantity, setQuantity] = useState<number>()
  const {
    getItemQuantity,
    incrementQuantity,
    decrementQuantity,
    removeItem
  } = useCart()

  useEffect(() => {
    setQuantity(getItemQuantity(product._id))

  }, [getItemQuantity])


  return (
    <div className='__cart-item-container container'>
      <div className='__cart-item-img'>
        <img src={product.imageName} alt={product.name} />
      </div>
      <div className='__cart-item-name-and-counter'>
        <h3>{product.name}</h3>
        <div className='__counter'>
          {/* need to check against '2' for it to work properly for some reason */}
          <button onClick={() => quantity! < 2 ? removeItem(product._id) : decrementQuantity(product._id)}>-</button>
          <div className='__count'>{quantity}</div>
          <button onClick={() => incrementQuantity(product)}>+</button>
        </div>
      </div>
      <div className='__cart-item-price-and-remove'>
        <span className='__cart-item-price'>{`$${product.price! * quantity!}`}</span>
        <div className='__cart-item-remove'>
        <button onClick={() => removeItem(product._id)}><i className="fa-solid fa-trash"></i></button>
      </div>
      </div>

      
    </div>
  )
}

export default CartProduct