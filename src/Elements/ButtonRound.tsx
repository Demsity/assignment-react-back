import React from 'react'
import { useCart } from '../Contexts/CartContext'

interface ButtonRoundProps {
  icon: string
  cart?: []
  hideOnMobile?: boolean
  id?: string
}

const ButtonRound = ({icon, cart,  hideOnMobile, id }:ButtonRoundProps) => {
  const { cartQuantity } = useCart()

  return (
    <button className={`__round-button ${hideOnMobile ? "hiddenOnMobile" : ""}` }  type='button' data-bs-toggle="offcanvas" data-bs-target={`#${id}`} aria-controls={id} >
      <i className={icon}></i>
      <span className='badge badge-pill badge-danger __badge-pill'>{cart ? cartQuantity: ''}</span>
    </button>
  )
}

export default ButtonRound