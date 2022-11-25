import React, { useEffect } from 'react'
import Product from '../Components/Product'
import Breadcrumbs from '../Components/BreadCrumbs'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useParams, useLocation } from 'react-router-dom'
import { useProducts } from '../Contexts/ProductsContext'
import FeaturedGrid from '../Components/FeaturedGrid'

function ProductViewSingle() {
  const productId:any = useParams()
  const { product, getProduct, gridProducts, getGridProducts } = useProducts()
  let location = useLocation()

  console.log(productId.id)
  // update on url change, to make it update like it should
  useEffect(() => {
    getProduct(productId.id)
    getGridProducts(4)
  
  }, [location.pathname])

  console.log(product)

  return  (
    <>
      <Navbar />
      {/* <Breadcrumbs page={product.name} prevPage={product.category} /> */}
      <Product product={product} />
      <FeaturedGrid title='Related Products' products={gridProducts} />
      <Footer />
    </>
  )
}

export default ProductViewSingle