import React from 'react';
import './ServiceCard.css'
import {NavLink} from 'react-router-dom';

function ServiceCard(props) {
    return (
            <div className="ServiceCard" key={props.id}>
                <img className="ServiceCard__icon" src={props.iconImage} alt="awsicon"/>
                <NavLink className="ServiceCard__Navigation" to={props.to}>
                    <h4 className="ServiceCard__text">{props.cardText}</h4>
                </NavLink>
            </div>  
    )
}

export default ServiceCard;
