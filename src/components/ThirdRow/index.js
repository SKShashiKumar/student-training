import React from 'react'
import './ThirdRow.scss'
import Tiles from './Tiles'

const ThirdRow = () => {
  return (
    <div className="ThirdRow">
        <div className="container">
            <div className="row justify-content-end align-items-center pb-5">
                <div className="col-xs-12 col-sm-12 xol-md-4 col-lg-4 col-xl-4">
                    <div className="container-fluid SocialBox">
                        <div className="row">
                            <div className="col-12">
                                <h6>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too.</h6>
                            </div>
                        </div>
                        <div className="row justify-content-start SocialRow">
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
            </div>
            <div className="row justify-content-center align-items-center Tiles">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 Layer">
                            <Tiles imgUrl={'Layer'} Heading={'Best industry leaders'} Desc={'Pract involves the best industry leaders, who share their experience, knowledge and tips with our students.'}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 Layer">
                            <Tiles imgUrl={'anchor'} Heading={'Best teachers'} Desc={'Our staff consists of professional experienced teachers, who love what they do and use creative approach in teaching.'}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 Layer">
                            <Tiles imgUrl={'Grow'} Heading={'National awards'} Desc={'Pract takes part in many IT educational contests. We won the National IT Progress Award 3 times.'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdRow