import React from 'react'
import profPic from '../assets/alice_wu.jpeg';
import './largeSidebar.css'

function LargeSidebar() {

    const textFont = {
        fontFamily: "JosefinSansL"
    };

    const nameFont = {
        fontFamily: "JosefinSansM"
    };

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-card">
                <div className="sidebar-top">
                    <div className="sidebar-top-child">
                        <img className="sidebar-image" alt="alice wu" src={profPic} />
                    </div>
                    <div className="sidebar-top-child">
                        <div className="sidebar-text" style={textFont}>Hi, I'm</div>
                        <div className="my-name" style={nameFont}>Alice Wu.</div>
                    </div>
                </div>
                <div className="sidebar-bottom">
                    <div className="sidebar-bottom-text" style={textFont}>Currently:</div>
                </div>
                {/* <Avi src={profPic} /> */}
            </div>
        </div>
    )
}

export default LargeSidebar