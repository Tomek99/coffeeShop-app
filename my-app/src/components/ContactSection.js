import React from 'react'
import '../styles/ContactSection.scss'
import Header from './Header'
import Map from './Map';
import ContactForm from './ContactForm'


function ContactSection() {

    return (
        <div className='ContactSection' id='contactSection'>
            <Header firstWord="contact" secondWord="us" />
            <div className='mapForm'>
                <Map />
                <ContactForm />

            </div>
        </div>
    )
}

export default ContactSection