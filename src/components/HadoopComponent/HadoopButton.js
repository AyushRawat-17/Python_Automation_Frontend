import React from 'react';
import './HadoopButton.css'

function HadoopButton(props) {
    return (
        <div className="HadoopButton" key={props.key}>
            <h3>{props.data}</h3>
        </div>
    )
}

export default HadoopButton
