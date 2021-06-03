import React from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
                <h1 className="Home__Text">Automate Everything in one Place</h1>
                <div className="Home__button">
                    <NavLink className="Home__Navigation" to='/dashboard'>
                        <h1 className="Home__button_text">GO TO DASHBOARD</h1>
                    </NavLink>
                </div>
        </div>
    )
}
