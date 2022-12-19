import React, { useEffect } from 'react'
import { useProducts } from '../Contexts/ProductsContext'
import FeaturedGrid from '../Components/FeaturedGrid'
import FlashSale from '../Components/FlashSale'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsBanner from '../Components/NewsBanner'
import OurSpeciality from '../Components/OurSpeciality'
import ProductDisplay from '../Components/ProductDisplay'
import PromoBanner from '../Components/PromoBanner'
import SaleGrid from '../Components/SaleGrid'
import Showcase from '../Components/Showcase'
import SiteInfo from '../Components/SiteInfo'
import { useQuery } from '@apollo/client'
import { getProductsTagQuery ,getProductsPriceQuery } from '../GraphQL/Queries'

function HomeView() {

  const featured = useQuery(getProductsTagQuery("featured"))
  const price1 = useQuery(getProductsPriceQuery(29))
  const price2 = useQuery(getProductsPriceQuery(49))

  
  if(featured.loading || price1.loading || price2.loading) 
    return (<div>loading...</div>)
  if(featured.error || price1.error || price2.error)
    return (<div>Error...</div>)
  
  
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid title='Featured Products' products={featured.data.productsTag.slice(0-8)} />
        <NewsBanner />
        <OurSpeciality />
        <SaleGrid products={price1.data.productsPrice} />
        <SaleGrid products={price2.data.productsPrice} imgRight={true} />
        <FlashSale />
        {/* <ProductDisplay products={gridProducts.slice(5)} /> */}
        <SiteInfo />
        <Footer />
    </>
  )
}

export default HomeView