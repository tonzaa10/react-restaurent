import React, { useRef } from 'react'
import navCSS from './../Nav/Nav.module.css'
function Nav() {

const menu = useRef();
const MenuHandler = () =>{
    menu.current.classList.toggle(navCSS.showMenu)
}

    return (
        <div className={navCSS.navbar}>
            <div className={navCSS.logo}>
                <a href="#">Swingo</a>
            </div>
            <ul ref={menu}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#smenu">Special Menu</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className={navCSS.navBtns}>
                    <i className="ri-user-line"></i>
                    <i className="ri-shopping-bag-line"></i>
                </div>
                <i className="ri-menu-2-line" id={navCSS.bars} onClick={MenuHandler}></i>
        </div>
    )
}
export default Nav
