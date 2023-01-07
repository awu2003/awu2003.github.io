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
                <div className="sidebar-content">
                    <div className="sidebar-top">
                        <div className="sidebar-top-child sidebar-top-image">
                            <img className="sidebar-image" alt="alice wu" src={profPic} />
                        </div>
                        <div className="sidebar-top-child sidebar-top-text">
                            {/* <div className="sidebar-text" style={textFont}>Hi, I'm</div> */}
                            <div className="my-name" style={nameFont}>Alice Wu</div>
                            <div className="sidebar-text" style={textFont}>
                                <span>Stats</span> and <span>CS</span> <br/> @ Harvard University
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-bottom">
                        {/* <div className="sidebar-bottom-text" style={textFont}>Currently:</div> */}
                        <div className="sidebar-bottom-footer" style={textFont}>Made with ♥ in React.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeSidebar