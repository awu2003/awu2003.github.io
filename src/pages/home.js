import React from 'react'
import BigText from '../components/bigText'
import '../App.css'
import LargeSidebar from '../components/largeSidebar'

function Home() {
  return (
    <div className='App-header'>
        <LargeSidebar />
        <div class="menu-wrapper">
            <div class="menu">
                <div class="menu-item">
                    <BigText class="menu-item" type="home" text="About" link="/about"/>
                </div>
                <div class="menu-item">
                    <BigText class="menu-item" type="home" text="Projects" link="/projects"/>
                </div>
                <div class="menu-item">
                    <BigText class="menu-item" type="home" text="Coursework" link="/coursework"/>
                </div>
                <div class="menu-item">
                    <BigText class="menu-item" type="home" text="Links" link="/links"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home