import React from 'react'
import GridCard from '../Elements/GridCard'
import { ProductInterface } from '../Utilities/Interfaces'

interface FeaturedGridProps {
    title: string
    products: ProductInterface[]
}

function FeaturedGrid( {title, products}:FeaturedGridProps ) {


    return (
        <div className="__grid-container">
            <h2>{title}</h2>
            <div className='__grid'>
                {
                    // Render products passed throught props
                   products.map(product => <GridCard key={product._id} products={product} path={`/product/${product._id}/description`} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid