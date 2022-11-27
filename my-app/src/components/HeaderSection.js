import React, { useRef, useState } from 'react'
import '../styles/HeaderSection.scss'
import Logo from '../images/logo.png'
import { BsCartFill, BsSearch } from 'react-icons/bs'
import PopupSearch from './PopupSearch';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleSearch = () => {
        setIsOpen(!isOpen);
    }

    const unfoldMenu = () => {
        setMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }


    return (
        <>
            <div className='divHeader'>
                <div className='menuHamburger'><button type='button' onClick={unfoldMenu}>X</button></div>
                <div className='bar' >
                    <div className='logo'>
                        <a href="#homeSection"><img src={Logo} alt="" /></a>
                    </div>
                    <div className="hideBar" style={{ display: isMenuOpen ? 'none' : 'block' }}>
                        <ul className='navBar'>
                            <li><a href='#homeSection'>Home</a></li>
                            <li><a href='#aboutSection'>About</a></li>
                            <li><a href='#menuSection'>Menu</a></li>
                            <li><a href='#productsSection'>Products</a></li>
                            <li><a href='#reviewSection'>Review</a></li>
                            <li><a href='#contactSection'>Contact</a></li>
                            <li><a href='#blogsSection'>Blogs</a></li>
                        </ul>
                    </div>

                    <div className='buttonsNextToEO' style={{ display: isMenuOpen ? 'none' : 'block' }}>

                        <button type="button" onClick={handleSearch}><BsSearch size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} /></button>

                        <button type="button"><BsCartFill size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header