import React from 'react'
import DisplayCard from '../Elements/DisplayCard'
import { ProductInterface } from '../Utilities/Interfaces'

interface IProductDisplay {
    products: ProductInterface[]
}

function ProductDisplay( { products }:IProductDisplay ) {
    
  return (
    <div className='__display-container container '>
        <div>
            <h3>Latest Products</h3>
            {
                // render products passed through props
                products.map(product => <DisplayCard key={product._id} products={product} path={`/product/${product._id}/description`} />)
            }
        </div>
        <div>
            <h3>Best Selling Product</h3>
            {
                // render products passed through props
                products.map(product => <DisplayCard key={product._id} products={product} path={`/product/${product._id}/description`} />)
            }
        </div>
        <div>
            <h3>Top Reacted Product</h3>
            {
                // render products passed through props
                products.map(product => <DisplayCard key={product._id} products={product} path={`/product/${product._id}/description`} />)
            }
        </div>
    </div>
  )
}

export default ProductDisplay