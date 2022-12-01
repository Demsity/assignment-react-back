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

function HomeView() {
  const { productsByTag, getProductsByTag, getProductsByPrice, getProductsByPrice2, productsByPrice, productsByPrice2 } = useProducts()

  useEffect(() => {
    getProductsByTag('featured', 8)
    getProductsByPrice(49, 4)
    getProductsByPrice2(29, 4)
    
  }, [])
  
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid title='Featured Products' products={productsByTag} />
        <NewsBanner />
        <OurSpeciality />
        {/* made a .slice due to API limitations, maybe fix later */}
        <SaleGrid products={productsByPrice} />
        <SaleGrid products={productsByPrice2} imgRight={true} />
        <FlashSale />
        {/* <ProductDisplay products={gridProducts.slice(5)} /> */}
        <SiteInfo />
        <Footer />
    </>
  )
}

export default HomeView