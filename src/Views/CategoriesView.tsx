import React, { useEffect } from 'react'
import Categories from '../Components/Categories'
import { useProducts } from '../Contexts/ProductsContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { getCategorysQuery } from '../GraphQL/Queries'
import { useQuery } from '@apollo/client'

function CategoriesView() {

  const {loading, error, data} = useQuery(getCategorysQuery)
  
  if(loading) 
    return (<div>loading...</div>)
  if(error)
    return (<div>Error...</div>)

  return (
  <>
    <Navbar />
    <Categories products={data.products} />
    <Footer />
  </>
  )
}

export default CategoriesView