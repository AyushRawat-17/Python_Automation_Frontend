import React from 'react';
import './DockerHome.css'
import dockerlogo from '../../images/dockerhome.svg'

function DockerHome() {
    return (
        <div className="DockerHome">
            <img  className="DockerHome__Icon" src={dockerlogo} alt="#"/>
        </div>
    )
}

export default DockerHome;
