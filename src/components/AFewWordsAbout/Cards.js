import React from 'react'

const Cards = ({CardHeading, CardSubHeading, CardDesc}) => {
  return (
    <div className="Cards">
        <h1 className='CardHeading'>{CardHeading}</h1>
        <p className='CardSubHeading'>{CardSubHeading}</p>
        <p className='CardDesc'>{CardDesc}</p>
    </div>
  )
}

export default Cards