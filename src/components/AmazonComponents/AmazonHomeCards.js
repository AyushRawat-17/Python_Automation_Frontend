import React, { useState } from 'react'
import './AmazonHomeCards.css'

function AmazonHomeCards(props) {
    const [bgColor,setbgColor]=useState({backgroundColor:props.bgColors})
    return (
        <div 
            className="AmazonHomeCards" 
            key ={props.id}
            style={bgColor} onMouseEnter={()=> setbgColor({backgroundColor: "#F39300"})}
            onMouseLeave={()=>setbgColor({backgroundColor:props.bgColors})}> 
                    <h3 className="AmazonHomeCards__Text">{props.text}</h3>
        </div>
    )
}

export default AmazonHomeCards
