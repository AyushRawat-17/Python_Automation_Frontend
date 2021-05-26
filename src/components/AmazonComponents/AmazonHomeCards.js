import React from 'react'
import './AmazonHomeCards.css'

function AmazonHomeCards(props) {
    const bgColor = {
        backgroundColor: props.bgColors
    }
    return (
        <div className="AmazonHomeCards" style={bgColor}> 
            <h4>{props.text}</h4>
        </div>
    )
}

export default AmazonHomeCards
