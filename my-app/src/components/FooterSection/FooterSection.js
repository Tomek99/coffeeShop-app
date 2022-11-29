import React from 'react'
import '../../styles/FooterSection.scss'
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
function FooterSection() {
    return (
        <div className='FooterSection'>
            <div className='socialMedia'>
                <a href='https://www.facebook.com/'><ImFacebook /></a>
                <a href='https://twitter.com/'><BsTwitter /></a>
                <a href='https://www.instagram.com/'><BsInstagram /></a>
                <a href='https://www.linkedin.com/'><BsLinkedin /></a>
                <a href='https://www.youtube.com/?gl=PL'><BsYoutube /></a>
            </div>
            <div>
                <ul className='navBarFooter'>
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