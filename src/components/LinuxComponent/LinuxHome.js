import React from 'react'
import './LinuxHome.css'
import redhatlogo from '../../images/redhat-icon.svg'

function LinuxHome() {
    return (
        <div className="LinuxHome">
            <img  className="LinuxHome__Icon" src={redhatlogo} alt="#"/>
        </div>
    )
}

export default LinuxHome;
