import React from 'react'
import ButtonSquare from '../Elements/ButtonSquare'
import FeaturedGrid from '../Components/FeaturedGrid'
import { ProductInterface } from '../Utilities/Interfaces'

interface SaleGridProps {
    img?: string
    imgRight?: boolean
    products: ProductInterface[]
}


function SaleGrid( { img, imgRight, products }:SaleGridProps ) {


    if (imgRight === true) {
        return (
            <div className='container __sale-grid'>
                <div className='__sale-grids-right'>
                    <FeaturedGrid title=''  products={products.slice(0-2)} />
                    <FeaturedGrid title=''  products={products.slice(3-5)} />
                </div>
                <div className='__sale-img'>
                    <img src={img} alt="" />
                    <p>2 FOR USD $29</p>
                    <ButtonSquare title='FLASH SALE' color='__btn-white' />
                </div>
            </div>
          )
    } else {
        return (
            <div className='container __sale-grid'>
                <div className='__sale-img'>
                    <img src={img} alt="" />
                    <p>2 FOR USD $49</p>
                    <ButtonSquare title='FLASH SALE' color='__btn-white' />
                </div>
                <div className='__sale-grids'>
                <FeaturedGrid title=''  products={products.slice(0-2)} />
                <FeaturedGrid title=''  products={products.slice(3-5)} />
                </div>
                
            </div>
          )
    }

}

export default SaleGrid