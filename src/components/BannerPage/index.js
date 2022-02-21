import React from 'react'
import './BannerPage.scss'

const BannerPage = () => {
  return (
    <div className="BannerPage">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 MainHeading">
                    <h1>Develop your mind and skills</h1>
                </div>
                <div className="col-12 SubHeading">
                    <h6>MORE THAN 1200 ONLINE COURSES</h6>
                </div>
                <div className="col-12 Desc">
                    <p>Want to get professional knowledge in the fast-developing IT sphere? Pract offers a wide variety of online courses for everyone willing to enter the world of information technologies.</p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-2">
                <div className="col-3 ButtonsRow">
                    <button className='rounded-pill'>Design</button>
                </div>
                <div className="col-3 ButtonsRow">
                    <button className='rounded-pill'>Programming</button>
                </div>
                <div className="col-3 ButtonsRow">
                    <button className='rounded-pill'>Marketing</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerPage