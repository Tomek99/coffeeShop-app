import React from 'react'
import '../../styles/AboutSection.scss'
import Header from '../Header/Header'
import ContactForm from '../ContactForm/ContactForm'
function AboutSection() {
    return (
        <div className='AboutSection' id='aboutSection' >
            <Header firstWord="about" secondWord="us" />
            <div className='div-row'>
                <img src="/images/about-img.jpeg" alt="AboutImg" />
                <div className='textArea'>
                    <h1>what makes our coffee special?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                    <br />
                    <button type='button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection