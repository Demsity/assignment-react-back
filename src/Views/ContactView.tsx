import React from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import Navbar from '../Components/Navbar'

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