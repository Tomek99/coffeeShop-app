import React from 'react'
import '../styles/ContactSection.scss'
import Header from './Header'


function ContactSection() {
    const apiCode = 'AIzaSyDbM0YXlgeR75jBGqykBoocBryTXO2Qma4';


    return (
        <div className='ContactSection' id='contactSection'>
            <Header firstWord="contact" secondWord="us" />

        </div>
    )
}

export default ContactSection