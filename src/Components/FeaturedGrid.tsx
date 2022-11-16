import React from 'react'
import GridCard from '../Elements/GridCard'

interface FeaturedGridProps {
    title: string
    products: []
}

function FeaturedGrid( {title, products}:FeaturedGridProps ) {


    return (
        <div className="__grid-container">
            <h2>{title}</h2>
            <div className='__grid'>
                {
                    // Render products passed throught props
                   products.map(product => <GridCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid