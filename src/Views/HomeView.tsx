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
  const { gridProducts, getGridProducts } = useProducts()

  useEffect(() => {
    getGridProducts(8)
  
  }, [])
  
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid title='Featured Products' products={gridProducts} />
        <NewsBanner />
        <OurSpeciality />
        {/* made a .slice due to API limitations, maybe fix later */}
        <SaleGrid products={gridProducts.slice(6)} />
        <SaleGrid products={gridProducts.slice(6)} imgRight={true} />
        <FlashSale />
        <ProductDisplay products={gridProducts.slice(5)} />
        <SiteInfo />
        <Footer />
    </>
  )
}

export default HomeView