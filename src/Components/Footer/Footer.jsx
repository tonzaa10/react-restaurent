import React from 'react'
import footerCSS from './../Footer/Foot.module.css'
import elem1 from './../../assets/images/elem1.png'


function Footer() {
    return (
        <footer className={`${footerCSS.FooterWrapper} section`} id="contact">
            <div className={footerCSS.Footer}>
                <div className={footerCSS.FooterForm}>
                    <h2 className="Section_title">Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className={footerCSS.input_wrapper}>
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div className={footerCSS.input_wrapper}>
                        <input type="email" placeholder="Enter Email" />
                    </div>
                    <textarea placeholder="Enter Message"></textarea>
                    <button AfterText="Submit"><span>Submit</span></button>
                </div>
                <div className={footerCSS.FooterLinks}>
                    <h3>ImportantLinks</h3>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#contact">Contact</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#testimonials">Testimonials</a></p>
                </div>
                <div className={footerCSS.FooterLinks}>
                    <h3>Help Center</h3>
                    <p>FAQ</p>
                    <p>Shop</p>
                    <p>Help Center</p>
                </div>
                <div className={footerCSS.FooterLinks}>
                    <h3>Contact</h3>
                    <p> <i className="ri-map-pin-line"></i> Klong San, Bangkok, Thailand, 1600</p>
                    <p> <i className="ri-phone-line"> </i> +662 000 0000</p>
                    <p> <i className="ri-mail-line"> </i> xxx@web.com</p>
                </div>
            </div>
            <img src={elem1} alt="" />
        </footer>
    )
}

export default Footer
