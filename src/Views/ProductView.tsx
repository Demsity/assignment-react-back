import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import { useProducts } from '../Contexts/ProductsContext'
import FeaturedGrid from '../Components/FeaturedGrid'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useQuery } from '@apollo/client'
import { getProductsQuery } from '../GraphQL/Queries'
import { ProductInterface } from '../Utilities/Interfaces'


function ProductView() {

  // const { products, getProducts } = useProducts()



  const {loading, error, data} = useQuery(getProductsQuery)
  
  if(loading) 
    return (<div>loading...</div>)
  if(error)
    return (<div>Error...</div>)


  return (
    <>
      <Navbar />
      <Breadcrumbs page='Products' />
      <FeaturedGrid title='Products' products={data.products} />
      <Footer />
    </>
  )
}

export default ProductView