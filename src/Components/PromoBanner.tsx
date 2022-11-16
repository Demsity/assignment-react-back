import React from 'react'
import Card from '../Elements/Card'

const PromoBanner = () => {
  return (
    <div className='container __promo-banner'>
        <Card 
            title='Winter Clearance Up to 70% Off!'
            par={
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.'
            }
            btnText='SHOP NOW'
            btnColor='__btn-black'
            img={'/Images/news-1.png'}
            imgAlt='Gray Woman standing'
            classes={'__card __brown'}
        />
        <Card 
            title='New Arrivals'
            btnText='SHOP NOW'
            btnColor='__btn-black'
            img={'/Images/news-2.png'}
            imgAlt='Gray man standning'
            classes={'__card'}
        />
    </div>
  )
}

export default PromoBanner