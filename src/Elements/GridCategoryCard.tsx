import React from 'react'
import ButtonSquare from '../Elements/ButtonSquare'
import { NavLink } from 'react-router-dom'

interface GridCategoryCardProps {
  category: string
}

function GridCategoryCard( { category }:GridCategoryCardProps) {
  return (
    <div className='__grid-cat-card'>
        <h2 className='__grid-cat-title'>{category}</h2>
    <NavLink state={category} to={`${category.toLowerCase()}`}><ButtonSquare title='Go To' color='__btn-black' /></NavLink>
    </div>
  )
}

export default GridCategoryCard