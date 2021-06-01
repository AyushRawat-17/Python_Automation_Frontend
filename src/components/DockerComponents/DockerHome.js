import React from 'react';
import './DockerHome.css'
import dockerlogo from '../../images/dockerhome.svg'
import DockerButton from './DockerButton.js'
import dockerButtonData from './dockerButtonData'

function DockerHome() {
    return (
        <div className="DockerHome">
            <img  className="DockerHome__Icon" src={dockerlogo} alt="#"/>
            <h2 className="DockerHome__Text">Docker Configuration</h2>
            <div className="DockerHome__ButtonGroup">
                {dockerButtonData.map(item => <DockerButton id={item.id} data={item.data}/> )}
            </div>
        </div>
    )
}

export default DockerHome;
