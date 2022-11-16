import React from 'react'
import ButtonSquare from '../Elements/ButtonSquare'
import FeaturedGrid from '../Components/FeaturedGrid'

interface SaleGridProps {
    img: string
    imgRight: boolean
    products: []
}


function SaleGrid( { img, imgRight, products }:SaleGridProps ) {


    if (imgRight === true) {
        return (
            <div className='container __sale-grid'>
                <div className='__sale-grids-right'>
                    <FeaturedGrid gridNr={2} products={products}  />
                    <FeaturedGrid gridNr={2} products={products} />
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
                    <FeaturedGrid gridNr={2} products={products} />
                    <FeaturedGrid gridNr={2} products={products}/>
                </div>
                
            </div>
          )
    }

}

export default SaleGrid