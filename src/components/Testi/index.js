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
                    {/* <SwiperSlide>
                       <div className="container-fluid Test1">
                           <div className="row justify-content-start align-items-center">
                               <div className="col-5">
                                   <img src="images/Testinomial1.jpg" alt="Test1" />
                               </div>
                               <div className="col-7">
                                   <div className="row">
                                       <div className="col-12">
                                           <h2>John Jackson,<span>developer</span></h2>
                                       </div>
                                       <div className="col-12">
                                           <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                       </div>
                                       <div className="col-12 readMoreButton">
                                           <button>read more</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                       <div className="container-fluid Test1">
                           <div className="row justify-content-start align-items-center">
                               <div className="col-5">
                                   <img src="images/Testinomial1.jpg" alt="Test1" />
                               </div>
                               <div className="col-7 ">
                                   <div className="row justify-content-start align-items-center">
                                       <div className="col-12">
                                       <h2>John Jackson,<span>developer</span></h2>
                                       </div>
                                       <div className="col-12">
                                           <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                       </div>
                                       <div className="col-12 readMoreButton">
                                           <button>read more</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="container-fluid Test1">
                           <div className="row justify-content-start align-items-center">
                               <div className="col-5">
                                   <img src="images/Linda.jpeg" alt="Test1" />
                               </div>
                               <div className="col-7 ">
                                   <div className="row justify-content-start align-items-center">
                                       <div className="col-12">
                                           <h2>Linda Larson,<span>designer</span></h2>
                                       </div>
                                       <div className="col-12">
                                           <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                       </div>
                                       <div className="col-12 readMoreButton">
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