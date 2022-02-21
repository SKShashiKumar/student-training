import React from 'react'
import './AFewWordAbout.scss'
import Cards from './Cards'

const AFewWordAbout = () => {
  return (
    <div className="AFewWordAbout">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ImgCard">
                    <img src="images/Banner.jpeg" alt="Banner" />
                    <h1>A few words about</h1>
                    <p>Every member of team believes strongly in the empowering power of knowledge. And we aim to share our knowledge with everyone willing to learn.</p>
                    <p><i className="fa-solid fa-arrow-right-long"></i></p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 RightCol">
                    <div className="container-fluid">
                        <div className="row g-5 justify-content-center align-items-center">
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                                <Cards CardHeading={'8.827'} CardSubHeading={'SATISFIED STUDENTS'} CardDesc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                                <Cards CardHeading={'$650'} CardSubHeading={'AVAILABLE COURSES'} CardDesc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                                <Cards CardHeading={'219.844'} CardSubHeading={'GRADUATES'} CardDesc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                                <Cards CardHeading={'only 10 '} CardSubHeading={'BEST TEACHERS'} CardDesc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default AFewWordAbout