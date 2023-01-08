import React from 'react'
import "./bigText.css"

function BigText(props) {
  const myFont = {
    fontFamily: "CormorantGaramondMI"
  };
  
  const type = props.type

  if (type == "home") {
    return (
      <div className="text-wrapper home" style={myFont}>
        <a class="hover-underline-animation" href={props.link}>
          {props.text}
        </a>
      </div>
    )
  }
  else if (type == "navbar") {
    return (
      <div className="text-wrapper navbar" style={myFont}>
        <a class="hover-underline-animation" href={props.link}>
          {props.text}
        </a>
      </div>
    )
  }
}

export default BigText