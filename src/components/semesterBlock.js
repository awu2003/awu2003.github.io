import React from 'react'
import './semesterBlock.css'

function SemesterBlock(props) {

    const headerFont = {
        fontFamily: "CormorantGaramondMI"
    };

    const nameFont = {
        fontFamily: "JosefinSansL"
    };

    const codeFont = {
        fontFamily: "JosefinSansM"
    };

    let coursework = props.courses
    console.log(coursework)
    return (
        <div className="semester-block">
            <div style={headerFont} className="block-header">
                {coursework.name}
            </div>
            <div className='block-courses'>
                {coursework.courses.map((course) => (
                    <div className="course">
                        <div style={codeFont} className="course-code">{course.code}</div>
                        <div style={nameFont} className="course-name">{course.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SemesterBlock