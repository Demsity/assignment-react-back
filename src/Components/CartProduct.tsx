import React, { useEffect, useState } from 'react'
import { useCart } from '../Contexts/CartContext'

interface CartProductProps {
  name?: string
  price?: number
  img?: string
  articleNumber: string
}

function CartProduct({ name, price, img, articleNumber }:CartProductProps) {
  const [quantity, setQuantity] = useState<number>()
  const {
    getItemQuantity,
    incrementQuantity,
    decrementQuantity,
    removeItem
  } = useCart()

  useEffect(() => {
    setQuantity(getItemQuantity(articleNumber))

  }, [getItemQuantity])


  return (
    <div className='__cart-item-container container'>
      <div className='__cart-item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='__cart-item-name-and-counter'>
        <h3>{name}</h3>
        <div className='__counter'>
          {/* need to check against '2' for it to work properly for some reason */}
          <button onClick={() => quantity! < 2 ? removeItem(articleNumber) : decrementQuantity(articleNumber)}>-</button>
          <div className='__count'>{quantity}</div>
          <button onClick={() => incrementQuantity(articleNumber)}>+</button>
        </div>
      </div>
      <div className='__cart-item-price-and-remove'>
        <span className='__cart-item-price'>{`$${price! * quantity!}`}</span>
        <div className='__cart-item-remove'>
        <button onClick={() => removeItem(articleNumber)}><i className="fa-solid fa-trash"></i></button>
      </div>
      </div>

      
    </div>
  )
}

export default CartProduct