import React from 'react';
import './ServiceCard.css'
import Paper from '@material-ui/core/Paper';

function ServiceCard(props) {
    return (
            <Paper elevation={3} className="ServiceCard" >
                <img className="ServiceCard__icon" src={props.iconImage} alt="awsicon"/>
                <h4 className="ServiceCard__text">{props.cardText}</h4>
            </Paper>  
    )
}

export default ServiceCard;
