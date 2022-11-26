import React from 'react'
import '../styles/FooterSection.scss'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
function FooterSection() {
    return (
        <div className='FooterSection'>
            <div className='socialMedia'>
                <a href='#'><BsFacebook /></a>
                <a href='#'><BsTwitter /></a>
                <a href='#'><BsInstagram /></a>
                <a href='#'><BsLinkedin /></a>
                <a href='#'><BsYoutube /></a>
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
            <p>Created By <span>Tomasz Skupień</span> | All Rights Reserved</p>
        </div>
    )
}

export default FooterSection