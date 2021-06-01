import React from 'react'
import './AmazonHomeCards.css'

function AmazonHomeCards(props) {
    return (
        <div className="AmazonHomeCards" key ={props.id}> 
                    <h3 className="AmazonHomeCards__Text">{props.text}</h3>
        </div>
    )
}

export default AmazonHomeCards
