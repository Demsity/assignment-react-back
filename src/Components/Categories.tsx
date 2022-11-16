import React from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import GridCategoryCard from '../Elements/GridCategoryCard'
import { ProductInterface } from '../Utilities/Interfaces'

function Categories(products) {
  // Get all the categorys from API products
  const categorires = [...new Set(products.products.map(item => item.category))]
  return (
    <>
      <Breadcrumbs page='categories' />
      <section className='container __categories'>
          <h2>Categories</h2>
          <div className='__categories-grid'>
              {
                // Render out a card for all the different categorys in the API
                  categorires.map((categorires) => <GridCategoryCard key={categorires} category={categorires} />)
              
              }
          </div>

      </section>
    </>
  )
}

export default Categories