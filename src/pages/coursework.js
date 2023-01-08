import React from 'react'
import SemesterBlock from '../components/semesterBlock'
import CourseworkData from "../assets/courseworkData"
import Navbar from '../components/navbar'
import '../App.css'

function Coursework() {
  return (
    <div className="App-header-variant">
      <Navbar />
      <div className="courses-grid">
        {CourseworkData.map((semester) => (
          <SemesterBlock courses={semester}/>
        ))}
      </div>
    </div>
  )
}

export default Coursework