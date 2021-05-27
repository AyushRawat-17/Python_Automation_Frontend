import React from 'react';
import './ServiceCardHome.css'
import ServiceGrid from './ServiceGrid.js'

function ServiceCardHome() {
    return (
        <div className="ServiceCardHome">
            <h2 className="ServiceCardHome__Title">DashBoard</h2>
            <ServiceGrid/>
        </div>
    );
}

export default ServiceCardHome;
