import React from 'react'
import BigText from '../components/bigText'
import '../App.css'

function Home() {
  return (
    <div className="Menu">
        <BigText text="About Me" link="/about"/>
        <BigText text="Projects" link="/projects"/>
        <BigText text="Courses" link="/courses"/>
        <BigText text="Links" link="/links"/>
    </div>
  )
}

export default Home