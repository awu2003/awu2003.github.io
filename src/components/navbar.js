import React from 'react'
import BigText from './bigText'
import './navbar.css'
// import '../App.css'

function Navbar() {
  return (
    <div className="navbar-wrapper menu">
        <div class="menu-item nav">
            <BigText class="menu-item" type="navbar" text="Home" link="/"/>
        </div>
        <div class="menu-item nav">
            <BigText class="menu-item" type="navbar" text="About" link="/about"/>
        </div>
        <div class="menu-item nav">
            <BigText class="menu-item" type="navbar" text="Projects" link="/projects"/>
        </div>
        <div class="menu-item nav">
            <BigText class="menu-item" type="navbar" text="Coursework" link="/coursework"/>
        </div>
        <div class="menu-item nav">
            <BigText class="menu-item" type="navbar" text="Links" link="/links"/>
        </div>
    </div>
  )
}

export default Navbar