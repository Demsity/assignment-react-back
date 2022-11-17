import React from 'react'
import { useState, useEffect } from 'react'
import GridCard from '../Elements/GridCard'
import { useProducts } from '../Contexts/ProductsContext'
import { ProductInterface } from '../Utilities/Interfaces'

function SearchBar() {
    const [query, setQuery] = useState("")
    const { products, getProducts } = useProducts()

    useEffect(() => {
        getProducts()

    }, [])

    // search products and return those matching query
    const search = (data: ProductInterface[]) => {
        return data.filter((item) => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) 
        )
    }

    
  return (
    <div className="__searchbar offcanvas offcanvas-end" tabIndex={-1} id="search" aria-labelledby="searchLabel">
        <div className="__searchbar-header offcanvas-header">
            <h5 className="offcanvasRightLabel" id="offcanvasrightLabel"><i className='fa-regular fa-magnifying-glass me-2'></i>Search</h5>
            <div className='__searchbar-input'>
                {/* Sets the query */}
                <input type="search" placeholder='What are you looking for?' onChange={(e) => setQuery(e.target.value)} />
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <div className="__searchbar-body offcanvas-body">

            <div className='__query-products'>
                {
                    // render out product matching the query
                   query ==='' ? 'Type in the searchbar' : search(products).map(product => <GridCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
                    
                }
            </div>
            
        </div>
    </div>
  )
}

export default SearchBar