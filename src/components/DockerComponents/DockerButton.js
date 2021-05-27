import React from 'react';
import './DockerButton.css'

function DockerButton(props) {
    return (
        <div className="DockerButton" key={props.id}>
            <h3>{props.data}</h3>
        </div>
    )
}

export default DockerButton
