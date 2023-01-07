import React from 'react'
import SemesterBlock from '../components/semesterBlock'
import CourseworkData from "../assets/courseworkData"
import '../App.css'

function Coursework() {
  return (
    <div className="App-header-variant">
      <div className="courses-grid">
        {CourseworkData.map((semester) => (
          <SemesterBlock courses={semester}/>
        ))}
      </div>
    </div>
  )
}

export default Coursework