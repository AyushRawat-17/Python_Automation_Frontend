import React from 'react';
import './ServiceCard.css'

function ServiceCard(props) {
    return (
            <div className="ServiceCard" key={props.id}>
                <img className="ServiceCard__icon" src={props.iconImage} alt="awsicon"/>
                <h4 className="ServiceCard__text">{props.cardText}</h4>
            </div>  
    )
}

export default ServiceCard;
