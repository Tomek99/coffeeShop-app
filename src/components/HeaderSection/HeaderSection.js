import React, { useRef, useState } from 'react'
import '../../styles/HeaderSection.scss'
import { BsCartFill, BsSearch } from 'react-icons/bs'
import PopupSearch from '../PopupSearch/PopupSearch';
import PopupBasket from '../PopupBasket/PopupBasket'

function Header() {
    const [isBasketOpen, setBasketOpen] = useState(false);
    const [isNavigationOpen, setNavigationOpen] = useState(false);
    let setClass = isNavigationOpen ? 'navMenu active' : 'navMenu';
    // const handleSearch = () => {
    //     setIsOpen(!isOpen);
    // }

    const handleNavigation = () => {
        setNavigationOpen(!isNavigationOpen);
        setBasketOpen(false);
    }

    const handleBasket = () => {
        setBasketOpen(!isBasketOpen);
        setNavigationOpen(false);
        console.log("test")
    }

    return (
        <>
            <div className='HeaderSection'>
                <div className={isNavigationOpen ? 'hamburger active' : 'hamburger'} onClick={handleNavigation}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div className='navBar' >
                    <div className='logo'>
                        <a href="#homeSection"><img src="/images/logo.png" alt="" /></a>
                    </div>
                    <nav >
                        <ul className={setClass} >
                            <li className='nav-item'><a href='#homeSection' className='nav-link'>Home</a></li>
                            <li className='nav-item'><a href='#aboutSection' className='nav-link'>About</a></li>
                            <li className='nav-item'><a href='#menuSection' className='nav-link'>Menu</a></li>
                            <li className='nav-item'><a href='#productsSection' className='nav-link'>Products</a></li>
                            <li className='nav-item'><a href='#reviewSection' className='nav-link'>Review</a></li>
                            <li className='nav-item'><a href='#contactSection' className='nav-link'>Contact</a></li>
                            <li className='nav-item'><a href='#blogsSection' className='nav-link'>Blogs</a></li>
                        </ul>
                    </nav>
                    <div className='buttonsNextToEO'>

                        <button type="button" ><BsSearch size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} /></button>

                        <button type="button" onClick={handleBasket}><BsCartFill size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} /></button>
                        <PopupBasket isBasketOpen={isBasketOpen} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header