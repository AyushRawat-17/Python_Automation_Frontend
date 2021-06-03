import React from 'react';
import './ServiceGrid.css';
import serviceCardData from './serviceCardData.js'
import ServiceCard from './ServiceCard.js'

function ServiceGrid() {
    return (
        <div className="ServiceGrid">
            {serviceCardData.map(item =>
                <ServiceCard 
                    id={item.id}
                    iconImage={item.iconImage}
                    cardText={item.cardText}
                    to={item.navpath}
                />)}
        </div>
    )
}

export default ServiceGrid;
