import React from 'react'
import DisplayCard from '../Elements/DisplayCard'

function ProductDisplay( { products } ) {
    
  return (
    <div className='__display-container container '>
        <div>
            <h3>Latest Products</h3>
            {
                // render products passed through props
                products.map(product => <DisplayCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
            }
        </div>
        <div>
            <h3>Best Selling Product</h3>
            {
                // render products passed through props
                products.map(product => <DisplayCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
            }
        </div>
        <div>
            <h3>Top Reacted Product</h3>
            {
                // render products passed through props
                products.map(product => <DisplayCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
            }
        </div>
    </div>
  )
}

export default ProductDisplay