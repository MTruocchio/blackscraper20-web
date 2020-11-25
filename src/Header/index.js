import React from 'react'
import logo from '../assets/logo.jpg'
import './styles.css'

const Header = (props) =>{
    return (
        <div className="header">
        <header>
            <div className="divLogo">
                <img src={logo} alt='logo' height="80px" width="120px"   />
            </div>
            <div className="divTitle">
                <h1>{props.title}</h1>
            </div>
        </header>
        </div>
    )
}

export default Header