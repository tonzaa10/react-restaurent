import React from 'react'
import TestimonialCSS from './../Testimonial/Testimonial.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import img1 from './../../assets/images/testi-1.jpg'
import img2 from './../../assets/images/testi-2.jpg'
import img3 from './../../assets/images/testi-3.jpg'
import img4 from './../../assets/images/testi-4.jpg'
import img5 from './../../assets/images/testi-5.jpg'
import img6 from './../../assets/images/testi-6.jpg'
import burger from './../../assets/images/sideBurgur.png'
function Testimonial() {
    return (
        <div className={`${TestimonialCSS.TestimonialWrapper} section`} id="testimonials">
            <h2 className="Section_title">What Our Customer Says</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                modules={[Autoplay]}
                autoplay={{ delay: 1500 }}
                speed={1580}
                loop={true}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 1,
                        },
                        900: {
                            slidesPerView: 2,
                        }
                    }
                }
                className={TestimonialCSS.swiper}
            >
                <SwiperSlide>
                    {/* <div className={`${TestimonialCSS.TestimonialCard} ${TestimonialCSS.TestimonialCard1} `}></div> */}
                    <div className={`${TestimonialCSS.TestimonialCard}`}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis incidunt, ab rerum architecto recusandae, veniam quibusdam enim porro, sed doloremque fugiat quidem?</p>
                        <div className={TestimonialCSS.Profile_img}>
                            <img src={img1} alt="" />
                            <div className={TestimonialCSS.Profile_details}>
                                <h4>Name</h4>
                                <p>CEO, ABC Company</p>
                            </div>
                        </div>
                        <i className="ri-double-quotes-l" id={TestimonialCSS.Quotes}></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={`${TestimonialCSS.TestimonialCard} ${TestimonialCSS.TestimonialCard1} `}></div> */}
                    <div className={`${TestimonialCSS.TestimonialCard}`}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis incidunt, ab rerum architecto recusandae, veniam quibusdam enim porro, sed doloremque fugiat quidem?</p>
                        <div className={TestimonialCSS.Profile_img}>
                            <img src={img2} alt="" />
                            <div className={TestimonialCSS.Profile_details}>
                                <h4>Name</h4>
                                <p>CEO, ABC Company</p>
                            </div>
                        </div>
                        <i className="ri-double-quotes-l" id={TestimonialCSS.Quotes}></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={`${TestimonialCSS.TestimonialCard} ${TestimonialCSS.TestimonialCard1} `}></div> */}
                    <div className={`${TestimonialCSS.TestimonialCard}`}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis incidunt, ab rerum architecto recusandae, veniam quibusdam enim porro, sed doloremque fugiat quidem?</p>
                        <div className={TestimonialCSS.Profile_img}>
                            <img src={img3} alt="" />
                            <div className={TestimonialCSS.Profile_details}>
                                <h4>Name</h4>
                                <p>CEO, ABC Company</p>
                            </div>
                        </div>
                        <i className="ri-double-quotes-l" id={TestimonialCSS.Quotes}></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={`${TestimonialCSS.TestimonialCard} ${TestimonialCSS.TestimonialCard1} `}></div> */}
                    <div className={`${TestimonialCSS.TestimonialCard}`}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis incidunt, ab rerum architecto recusandae, veniam quibusdam enim porro, sed doloremque fugiat quidem?</p>
                        <div className={TestimonialCSS.Profile_img}>
                            <img src={img4} alt="" />
                            <div className={TestimonialCSS.Profile_details}>
                                <h4>Name</h4>
                                <p>CEO, ABC Company</p>
                            </div>
                        </div>
                        <i className="ri-double-quotes-l" id={TestimonialCSS.Quotes}></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={`${TestimonialCSS.TestimonialCard} ${TestimonialCSS.TestimonialCard1} `}></div> */}
                    <div className={`${TestimonialCSS.TestimonialCard}`}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis incidunt, ab rerum architecto recusandae, veniam quibusdam enim porro, sed doloremque fugiat quidem?</p>
                        <div className={TestimonialCSS.Profile_img}>
                            <img src={img5} alt="" />
                            <div className={TestimonialCSS.Profile_details}>
                                <h4>Name</h4>
                                <p>CEO, ABC Company</p>
                            </div>
                        </div>
                        <i className="ri-double-quotes-l" id={TestimonialCSS.Quotes}></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={`${TestimonialCSS.TestimonialCard} ${TestimonialCSS.TestimonialCard1} `}></div> */}
                    <div className={`${TestimonialCSS.TestimonialCard}`}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis incidunt, ab rerum architecto recusandae, veniam quibusdam enim porro, sed doloremque fugiat quidem?</p>
                        <div className={TestimonialCSS.Profile_img}>
                            <img src={img6} alt="" />
                            <div className={TestimonialCSS.Profile_details}>
                                <h4>Name</h4>
                                <p>CEO, ABC Company</p>
                            </div>
                        </div>
                        <i className="ri-double-quotes-l" id={TestimonialCSS.Quotes}></i>
                    </div>
                </SwiperSlide>
            </Swiper>
            <img src={burger} alt="" className={TestimonialCSS.Slideelement} />
        </div>
    )
}
export default Testimonial
