import React, { useEffect } from 'react'
import Categories from '../Components/Categories'
import { useProducts } from '../Contexts/ProductsContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function CategoriesView() {

  const { products, getProducts } = useProducts()

  useEffect(() => {
    getProducts()
  
  }, [])

  return (
  <>
    <Navbar />
    <Categories products={products} />
    <Footer />
  </>
  )
}

export default CategoriesView