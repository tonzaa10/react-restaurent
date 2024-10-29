import React from 'react'
import tmenuCSS from './../TodayMenu/Tmenu.module.css'
import img1 from './../../assets/images/TM-1.jpg'
import img2 from './../../assets/images/TM-2.jpg'
import img3 from './../../assets/images/TM-3.jpg'
import img4 from './../../assets/images/TM-4.jpg'

function Tmenu() {
    return (
        <div className={`${tmenuCSS.TmenuWrapper} section`} id="menu">

            <h2 className="Section_title">Today's Menu</h2>
            <div className={tmenuCSS.menuCards}>
                <div className={tmenuCSS.Card}>
                    <img src={img1} alt="" />
                    <div className={tmenuCSS.Detail}>
                        <h3>Past</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={tmenuCSS.Price}>
                        <h4>$10</h4>
                        <i className="ri-shopping-cart-line"></i>
                    </div>
                </div>
                <div className={tmenuCSS.Card}>
                    <img src={img2} alt="" />
                    <div className={tmenuCSS.Detail}>
                        <h3>Shake</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={tmenuCSS.Price}>
                        <h4>$10</h4>
                        <i className="ri-shopping-cart-line"></i>
                    </div>
                </div>
                <div className={tmenuCSS.Card}>
                    <img src={img3} alt="" />
                    <div className={tmenuCSS.Detail}>
                        <h3>Dal Fry</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={tmenuCSS.Price}>
                        <h4>$10</h4>
                        <i className="ri-shopping-cart-line"></i>
                    </div>
                </div>
                <div className={tmenuCSS.Card}>
                    <img src={img4} alt="" />
                    <div className={tmenuCSS.Detail}>
                        <h3>Pizza</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={tmenuCSS.Price}>
                        <h4>$10</h4>
                        <i className="ri-shopping-cart-line"></i>
                    </div>
                </div>
            </div>

            <h2 className="Section_title">Quality Service</h2>
            <div className={tmenuCSS.Service_Cards}>
                <div className={tmenuCSS.Service_Card}>
                    <i className="ri-restaurant-line"></i>
                    <h4>Restaurant</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={tmenuCSS.Service_Card}>
                    <i className="ri-goblet-line"></i>
                    <h4>Bar</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={tmenuCSS.Service_Card}>
                    <i className="ri-cup-line"></i>
                    <h4>Cafe</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={tmenuCSS.Service_Card}>
                    <i className="ri-cake-2-line"></i>
                    <h4>Desert</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                
            </div>

        </div>
    )
}

export default Tmenu
