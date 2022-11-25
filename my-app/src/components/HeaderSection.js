import React, { useRef, useState } from 'react'
import '../styles/HeaderSection.scss'
import Logo from '../images/logo.png'
import { BsCartFill, BsSearch } from 'react-icons/bs'
import PopupSearch from './PopupSearch';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className='divHeader'>
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
                <div>
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

                <div className='buttonsNextToEO'>

                    <button type="button" onClick={handleSearch}><BsSearch size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} /></button>

                    <button type="button"><BsCartFill size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} /></button>
                </div>
            </div>

        </>
    )
}

export default Header