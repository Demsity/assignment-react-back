import React from 'react'
import ButtonSquare from '../Elements/ButtonSquare'
import { useCart } from '../Contexts/CartContext'
import CartProduct from './CartProduct'



function Cart() {
  const { cartItems } = useCart()
  return (
    <div className="__shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="cart" aria-labelledby="cartLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel"><i className='fa-light fa-bag-shopping me-2'></i>Shopping Cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            // render out a product for each item in caritems state
            cartItems.map(item => (<CartProduct key={item._id} product={item} />))
          }
        </div>
        <div className='__purchase-btn'>
          <ButtonSquare title='Purchase' color='__btn-black' />
        </div>
    </div>
  )
}

export default Cart