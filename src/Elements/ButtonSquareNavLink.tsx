import React from 'react'
import { NavLink } from 'react-router-dom'

interface ButtonSquareNavLinkProps{
  title: string
  color: string
  path: string
}

const ButtonSquareNavLink = ({ title, color, path }:ButtonSquareNavLinkProps) => {
  return (
    <NavLink to={path} className={color}>{title}</NavLink>

  )
}

export default ButtonSquareNavLink