import React from 'react'
import './AmazonHome.css'
import awsLogo from '../../images/awswhite.svg'
import AmazonHomeCards from './AmazonHomeCards.js'
import amazonCardData from './amazonCardData.js'

function AmazonHome() {
    return (
        <div className="AmazonHome">
            <img  className="AmazonHome__Icon" src={awsLogo} alt="#"/>
            <h2 className="AmazonHome__Text">AWS Configuration</h2>
            <div className="AmazonHome__List">
                {amazonCardData.map(item => <AmazonHomeCards id={item.id} text={item.text} />)}
            </div>
        </div>
    )
}

export default AmazonHome
