import React from 'react'
import "./bigText.css"

function BigText(props) {
  const mystyle = {
    color: "white",
    padding: "5px",
    fontSize: "80px",
    fontFamily: "CormorantGaramondMI"
  };

  return (
    <div style={mystyle}>
      <a class="hover-underline-animation" href={props.link}>
        {props.text}
      </a>
    </div>
  )
}

export default BigText