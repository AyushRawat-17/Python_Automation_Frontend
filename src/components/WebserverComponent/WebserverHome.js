import React from 'react'
import './WebserverHome.css'
import apachelogo from '../../images/apache.svg'

function WebserverHome() {
    return (
        <div className="WebserverHome">
            <img  className="WebserverHome__Icon" src={apachelogo} alt="#"/>
        </div>
    )
}

export default WebserverHome;
