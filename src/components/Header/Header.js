import React from 'react'
import '../../styles/Header.scss'

function Header(props) {
    return (
        <header>{props.firstWord} <span>{props.secondWord}</span></header>
    )
}

export default Header