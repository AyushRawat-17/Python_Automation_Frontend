import React from 'react'
import './WebserverButton.css'

function WebserverButton(props) {
    return (
        <div className="WebserverButton" key={props.key}>
            <h3>{props.data}</h3>
        </div>
    )
}

export default WebserverButton
