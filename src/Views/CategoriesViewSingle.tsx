import React, { useEffect } from 'react'
import GridCard from '../Elements/GridCard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../Components/BreadCrumbs'
import { useProducts } from '../Contexts/ProductsContext'

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