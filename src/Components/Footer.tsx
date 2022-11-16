import React from 'react'

function Footer() {
  return (
    <section className='__footer'>
      <div className='container __footer-container'>
        <div className='__footer-links'>
          <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.google.com"><i className="fa-brands fa-google"></i></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='__footer-text'>
          <p>© 2022 Fixxo. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer