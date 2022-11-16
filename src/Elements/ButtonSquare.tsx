import React from 'react'

interface ButtonSquareProps{
  title: string
  color: string
  path?: string
}

const ButtonSquare = ({ title, color, path }:ButtonSquareProps) => {
  return (
    <button data-testid='buttonSquare' className={color}>{title}</button>

  )
}

export default ButtonSquare