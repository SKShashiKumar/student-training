import React from 'react'

const Testinomial = ({imgName, TestName}) => {
  return (
    <div className="Testinomial">
        <img src={`images/${imgName}.jpg`} alt={imgName} />
        <p className='subHeading pt-2'>{TestName}</p>
        <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        <div className='pt-2'>
            <div className="row justify-content-center">
                <div className="col-2">
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="col-2">
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="col-2">
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testinomial