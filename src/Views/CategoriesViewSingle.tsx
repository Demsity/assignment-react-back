import React, { useEffect } from 'react'
import GridCard from '../Cards/GridCard'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import { useProducts } from '../Context/ProductsContext'

function CategoriesViewSingle( ) {
    const { products, getProducts } = useProducts()

    useEffect(() => {
      getProducts()
    
    }, [])

    const location = useLocation()
    let filtered = []

    // filter products based on url location
    filtered = products.filter((products) => {return products.category === location.state})
    return (
        <>
            <Navbar />
            <Breadcrumbs page={location.state} prevPage='categories' />
            <section className='__categories container'>
                <h2>{location.state}</h2>
                <div className='__categories-grid'>
                
                {
                    // render out products based on url location
                    filtered.map(filtered => <GridCard key={filtered.articleNumber} products={filtered} path={`../product/${filtered.articleNumber}/description`} />)
                }

                </div>
            </section>

            <Footer />
        </>
    )
}

export default CategoriesViewSingle