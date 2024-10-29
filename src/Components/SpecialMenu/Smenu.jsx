import React from 'react'
import smenuCSS from './../SpecialMenu/Smenu.module.css'

import pizza1 from './../../assets/images/pasta-1.jpg'
import rice1 from './../../assets/images/rise-1.jpg'
import salad1 from './../../assets/images/salad-1.jpg'
import pasta1 from './../../assets/images/pasta-1.jpg'
import burger from './../../assets/images/sideBurgur.png'
import Beans from './../../assets/images/beans.png'

function Smenu() {
    return (
        <div className={`${smenuCSS.smenuWrapper} section`} id="smenu">
            <h2 className="Section_title">Spacial Menu</h2>
            <div className={smenuCSS.MenuCards}>
                <div className={smenuCSS.Card}>
                    <img src={pizza1} alt="" />
                    <h3>Pizza</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, aspernatur.</p>
                    <button AfterText="Buy Now"><span>Buy Now</span></button>
                </div>
                <div className={smenuCSS.Card}>
                    <img src={rice1} alt="" />
                    <h3>Rice</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, aspernatur.</p>
                    <button AfterText="Buy Now"><span>Buy Now</span></button>
                </div>
                <div className={smenuCSS.Card}>
                    <img src={salad1} alt="" />
                    <h3>Salad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, aspernatur.</p>
                    <button AfterText="Buy Now"><span>Buy Now</span></button>
                </div>
                <div className={smenuCSS.Card}>
                    <img src={pasta1} alt="" />
                    <h3>Pasta</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, aspernatur.</p>
                    <button AfterText="Buy Now"><span>Buy Now</span></button>
                </div>
            </div>
            <img src={burger} alt="" className={`${smenuCSS.burgerPng} ${smenuCSS.element}`}/>
            <img src={Beans} alt="" className={`${smenuCSS.BeanPng} ${smenuCSS.element}`}/>
        </div >
    )
}

export default Smenu
