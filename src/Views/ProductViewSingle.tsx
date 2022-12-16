import React from 'react'
import Product from '../Components/Product'
import Breadcrumbs from '../Components/BreadCrumbs'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useParams, useLocation } from 'react-router-dom'
import FeaturedGrid from '../Components/FeaturedGrid'
import { getProductQuery } from '../GraphQL/Queries'
import { useQuery } from '@apollo/client'

function ProductViewSingle() {
  const productId:any = useParams()
  let location = useLocation()

  const {loading, error, data} = useQuery(getProductQuery(productId.id))
  
  if(loading) 
    return (<div>loading...</div>)
  if(error)
    return (<div>Error...</div>)



  return  (
    <>
      <Navbar />
      <Breadcrumbs page={data.product!.name} prevPage={`Product`} />
      <Product product={data.product} />
      {/* <FeaturedGrid title='Related Products' products={data.product} /> */}
      <Footer />
    </>
  )
}

export default ProductViewSingle