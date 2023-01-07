import React from 'react'
import './semesterBlock.css'

function SemesterBlock(props) {

    let coursework = props.courses
    console.log(coursework)
    return (
        <div className="semester-block">
            <div className="block-header">
                {coursework.name}
            </div>
            <div className='block-courses'>
                {coursework.courses.map((course) => (
                    <div className="course">
                        <div className="course-code">{course.code}</div>
                        <div className="course-name">{course.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SemesterBlock