import React, { useEffect } from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import { useProducts } from '../Contexts/ProductsContext'
import FeaturedGrid from '../Components/FeaturedGrid'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function ProductView() {

  const { products, getProducts } = useProducts()

  useEffect(() => {
    getProducts()
  
  }, [])

  return (
    <>
      <Navbar />
      <Breadcrumbs page='Products' />
      <FeaturedGrid title='Products' products={products} />
      <Footer />
    </>
  )
}

export default ProductView