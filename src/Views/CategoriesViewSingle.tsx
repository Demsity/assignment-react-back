import React, { useEffect } from 'react'
import GridCard from '../Elements/GridCard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../Components/BreadCrumbs'
import { useProducts } from '../Contexts/ProductsContext'
import { getCategorysQuery, getProductsQuery } from '../GraphQL/Queries'
import { useQuery } from '@apollo/client'
import { ProductInterface } from '../Utilities/Interfaces'

function CategoriesViewSingle( ) {
    const {loading, error, data} = useQuery(getProductsQuery)
  
    if(loading) 
      return (<div>loading...</div>)
    if(error)
      return (<div>Error...</div>)

    const location = useLocation()
    let filtered :ProductInterface[] = []

    // filter products based on url location
    filtered = data.products.filter((products:ProductInterface) => {return products.category === location.state})
    console.log(filtered)
    return (
        <>
            <Navbar />
            <Breadcrumbs page={location.state} prevPage='categories' />
            <section className='__categories container'>
                <h2>{location.state}</h2>
                <div className='__categories-grid'>
                
                {
                    // render out products based on url location
                    filtered.map(filtered => <GridCard key={filtered._id} products={filtered} path={`../product/${filtered._id}/description`} />)
                }

                </div>
            </section>

            <Footer />
        </>
    )
}

export default CategoriesViewSingle