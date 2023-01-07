import React from 'react'
import "./bigText.css"

function BigText(props) {
  const myFont = {
    fontFamily: "CormorantGaramondMI"
  };

  return (
    <div className="text-wrapper" style={myFont}>
      <a class="hover-underline-animation" href={props.link}>
        {props.text}
      </a>
    </div>
  )
}

export default BigText