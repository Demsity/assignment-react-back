import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function PageNotFound() {
  return (
    <>
      <Navbar />
        <div className='__page-not-found container'>
          <h2>404 Page Not Found</h2>
          <p>We are sorry for the inconvenience</p>
        </div>
      <Footer />
    </>
  )
}

export default PageNotFound