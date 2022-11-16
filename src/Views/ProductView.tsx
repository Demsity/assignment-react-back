import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import { useProducts } from '../Context/ProductsContext'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

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