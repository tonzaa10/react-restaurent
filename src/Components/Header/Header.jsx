import React from 'react'
import headerCSS from './../Header/Header.module.css'
import headerImg from './../../assets/images/pic1-dlkK6NBf.png'
import img2 from './../../assets/images/img2.png'
function Header() {
    return (
        <div className={`${headerCSS.HeaderWrapper}`} id="home">
            <div className={headerCSS.HeaderContent}>
                <h4>The Best Food Stations</h4>
                <h1>Where Food <br/> Meets <span>Best Passion</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa exercitationem magnam optio veritatis soluta consequatur nihil illo doloremque cupiditate dolorum!</p>
                <div className={headerCSS.HeaderBtns}>
                    <button AfterText="Book A table"><span>Book A Table</span></button>
                    <button AfterText="View Now"><span>View Now</span></button>
                </div>
            </div>
            <div className={headerCSS.HeaderImg}>
                <img src={headerImg} alt="header-img" id={headerCSS.HeaderIMG} />
                <img src={img2} alt="" id={headerCSS.img2} />
            </div>
        </div>
    )
}
export default Header
