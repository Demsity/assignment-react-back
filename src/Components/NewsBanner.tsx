import React from 'react'
import Card from '../Elements/Card'

const NewsBanner = () => {
  return (
    <div className='container __news-banner'>
        <Card 
            title="Pamela Reif's Top Picks"
            btnText='SHOP NOW'
            btnColor='__btn-black'
            img={'/Images/Pamela-Reif.png'}
            imgAlt='Pamela Reif standing'
            classes={'__card __brown-2'}
            imgLeft={true}
        />
        <Card 
            title= "Let's Be Conscious"
            btnText='FLASH SALE'
            btnColor='__btn-white'
            img={'/Images/Conscious.png'}
            imgAlt='Gray man standning'
            classes={'__card'}
        />
    </div>
  )
}

export default NewsBanner