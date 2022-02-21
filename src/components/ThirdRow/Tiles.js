import React from 'react'

const Tiles = ({imgUrl,Heading,Desc}) => {
  return (
    <>
        <div className='Tiles'>
            <img src={`images/${imgUrl}.PNG`} alt={imgUrl} />
            <h5>{Heading}</h5>
            <p>{Desc}</p>
        </div>
    </>
  )
}

export default Tiles