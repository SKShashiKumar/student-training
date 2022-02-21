import React, { useRef, useState } from "react";
import './Testi.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation,Pagination } from "swiper";


const Testi = () => {

    
  return (
    <div className="Testi">
        <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                <Swiper navigation={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                            }} 
                        modules={[Navigation,Pagination]}
                        className="mySwiper"
                >
                    <SwiperSlide>
                       <div className="container-fluid Test1">
                           <div className="row align-items-center">
                               <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center">
                                   <img src="images/Testinomial1.jpg" alt="Test1" />
                               </div>
                               <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 ">
                                   <div className="row align-items-center">
                                       <div className="col-12 pt-3 ">
                                       <h2>John Jackson,<span>developer</span></h2>
                                       </div>
                                       <div className="col-12 pt-3 ">
                                           <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                       </div>
                                       <div className="col-12 pt-3  readMoreButton">
                                           <button>read more</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="container-fluid Test1">
                           <div className="row align-items-center">
                               <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center">
                                   <img src="images/Linda.jpeg" alt="Test1" />
                               </div>
                               <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 ">
                                   <div className="row align-items-center">
                                       <div className="col-12 pt-3 ">
                                           <h2>Linda Larson,<span>designer</span></h2>
                                       </div>
                                       <div className="col-12 pt-3 ">
                                           <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                       </div>
                                       <div className="col-12  pt-3 readMoreButton">
                                           <button>read more</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Testi