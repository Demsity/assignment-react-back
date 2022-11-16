import React, { useEffect } from 'react'
import Product from '../Products/Product'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useParams, useLocation } from 'react-router-dom'
import { useProducts } from '../Context/ProductsContext'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'

function ProductViewSingle() {
  const productId = useParams()
  const { product, getProduct, gridProducts, getGridProducts } = useProducts()
  let location = useLocation()

  // update on url change, to make it update like it should
  useEffect(() => {
    getProduct(productId.id)
    getGridProducts(4)
  
  }, [location.pathname])

  

  return  (
    <>
      <Navbar />
      <Breadcrumbs page={product.name} prevPage='product' />
      <Product product={product} />
      <FeaturedGrid title='Related Products' products={gridProducts} />
      <Footer />
    </>
  )
}

export default ProductViewSingle