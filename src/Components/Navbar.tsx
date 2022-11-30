import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonRound from '../Elements/ButtonRound'
import { useCart } from '../Contexts/CartContext'





const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [showMenu, setShowMenu] = useState(true)

  const { cartQuantity } = useCart()

// Fix background change on scrolling back up
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };

  const toggleMenu = () => {
      setShowMenu(!showMenu) 
  }

  useEffect(() => {
    // Make Menu appear hidden on app start, mobile view
    if (window.innerWidth >= 576) {
      setShowMenu(true)
    }else {
      setShowMenu(false)
    }

    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className='__navbar-container' style={navbar ? {'backgroundColor': 'white'} : {'backgroundColor': 'none'}} >
      <div className='__navbar-wrapper container'>
      <NavLink className='__navbar-logo' to='/'>Fixxo.</NavLink>
        <nav className='__navbar-links' style={showMenu ? {'right': '0'} : {'right': '-200px'}}>
            <NavLink end className='__navbar-link' to='/'>Home</NavLink>
            <NavLink className='__navbar-link' to='/categories'>Categories</NavLink>
            <NavLink className='__navbar-link' to='/product/'>Products</NavLink>
            <NavLink end className='__navbar-link' to='/contact'>Contacts</NavLink>
            <NavLink end className='__navbar-link' to='/admin'>Manage</NavLink>
        </nav>
        <nav className='__user-interface ms-4'>
            <button className={'__round-button'} type='button' data-bs-toggle="offcanvas" data-bs-target={'#search'} aria-controls={'search'} >
              <i className='fa-regular fa-magnifying-glass'></i>
            </button>
            <ButtonRound hideOnMobile={true} icon='fa-light fa-code-compare'  />
            <ButtonRound hideOnMobile={true} icon='fa-light fa-heart' />
            <button className={'__round-button'} type='button' data-bs-toggle="offcanvas" data-bs-target={'#cart'} aria-controls={'cart'} >
              <i className='fa-light fa-bag-shopping'></i>
              <span className='badge badge-pill badge-danger __badge-pill'>{cartQuantity}</span>
            </button>
            <button className='__hide-menu __round-button' onClick={toggleMenu}><i className="fa-regular fa-bars"></i></button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

