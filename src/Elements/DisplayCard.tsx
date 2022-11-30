import React from 'react'
import ButtonRound from './ButtonRound'
import ButtonSquareNavLink from './ButtonSquareNavLink'
import { useCart } from '../Contexts/CartContext'
import { v4 as uuidv4 } from 'uuid'
import { ProductInterface } from '../Utilities/Interfaces'

interface DisplayCardProps {
    products: ProductInterface
    path: string
}

function DisplayCard( { products, path }:DisplayCardProps ) {
    const { incrementQuantity } = useCart()


    
    
  return (
    <div className="__display-card">
        <div className="__display-card-image">
            <nav className="__display-card-buttons">
            <div className="__display-card-btn-round">
                <ButtonRound icon='fa-light fa-code-compare'  />
                <ButtonRound icon='fa-light fa-heart' />
                <button className='__round-button' onClick={() => incrementQuantity(products)} >
                    <i className='fa-light fa-bag-shopping'></i>
                </button>
            </div>
                <ButtonSquareNavLink title='QUICK VIEW' color='__btn-red' path={path} />
            </nav>
            <img className='img-fluid' src={products.imageName} alt={products.name} />
        </div>
        <div className="__display-card-text">
                <p className="__display-card-text-category">{products.category}</p>
                <p className="__display-card-text-product">{products.name}</p>
                <div className="__display-rating">
                    {
                        // render out a star for each rating value. Create a array with value
                        Array(products.rating).fill(0).map(item => <i key={uuidv4()} className="fa-sharp fa-solid fa-star-sharp"></i>)
                    }
                </div>
                <div className="__display-price">
                    <p className="__display-price-original">{'$'+ products.price}</p>
            </div>
        </div>
    </div>
  )
}

export default DisplayCard