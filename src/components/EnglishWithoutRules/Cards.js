import React from 'react'

const Cards = ({imgUrl, Heading, Desc}) => {
  return (
    <div className="cards justify-content-center">
        <img src={`images/${imgUrl}`} alt={imgUrl} className='pt-2'/>
        <h3 className='pt-2'>{Heading}</h3>
        <p className='pt-2'>{Desc}</p>
    </div>
  )
}

export default Cards