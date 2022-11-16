import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import Navbar from '../Navbar/Navbar'

function ContactView() {
  return (
  <>
    <Navbar />
    <Breadcrumbs page="contact" />
    <Map />
    <ContactForm />
    <Footer />
  </>
  )
}

export default ContactView