import React from 'react'
import './WebserverHome.css'
import apachelogo from '../../images/apache.svg'
import WebserverButton from './WebserverButton.js'
import webserverData from './webserverButtonData.js'

function WebserverHome() {
    return (
        <div className="WebserverHome">
            <img  className="WebserverHome__Icon" src={apachelogo} alt="#"/>
            <h2 className="WebserverHome__Title">Webserver Configuration</h2>
            <div className='WebserverHome__ButtonGroup'>
                {webserverData.map(item => <WebserverButton key={item.key} data={item.data}/>)}
            </div>
        </div>
    )
}

export default WebserverHome;
