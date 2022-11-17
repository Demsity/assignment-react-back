import React from 'react'
import ButtonSquare from '../Elements/ButtonSquare'

interface CardProps {
  title: string
  par?: string
  btnText: string
  btnColor: string
  img: string
  imgAlt: string
  classes: string
  imgLeft?: boolean
}

const Card = ({title, par, btnText, btnColor, img, imgAlt, classes, imgLeft}:CardProps) => {

  // Made a prop for a left or right aligned image
  if (imgLeft){
    return (
      <div className={classes}>
          <img src={img} alt={imgAlt} />
          <div className='__card-text __card-text-left'>
              <h2>{title}</h2>
              <p>{par}</p>
              <ButtonSquare title={btnText} color={btnColor} />
          </div>
      </div>
    )} else {
      return (
        <div className={classes}>
            <div className='__card-text'>
                <h2>{title}</h2>
                <p>{par}</p>
                <ButtonSquare title={btnText} color={btnColor} />
            </div>
            
            <img src={img} alt={imgAlt} />
        </div>
      )
    }
}


export default Card 