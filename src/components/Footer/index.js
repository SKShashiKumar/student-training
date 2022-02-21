import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 leftCol">
                    {/* <img src="images/send.png" alt="send" /> */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 leftCol rightCol">
                    <form action="#">
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-pill" id="exampleFormControlInput1" placeholder="name"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control rounded-pill" id="exampleFormControlInput2" placeholder="email"  required pattern="^[a-zA-Z\d]{5,25}$"/>
                    </div>
                    <div className="mb-3">
                        <button type='submit'className='rounded-pill'>Contact Us</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer