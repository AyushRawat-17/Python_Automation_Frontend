import React from 'react'
import './AmazonHome.css'
import awsLogo from '../../images/awswhite.svg'
import AmazonHomeCards from './AmazonHomeCards.js'

function AmazonHome() {
    return (
        <div className="AmazonHome">
            <img  className="AmazonHome__Icon" src={awsLogo} alt="#"/>
            <div className="AmazonHome__List">
                <AmazonHomeCards text="EC2 Instances" bgColors="#511281"/>
                <AmazonHomeCards text="Storage" bgColors="#ffd56b"/>
                <AmazonHomeCards text="S3 Bucket" bgColors="#a6d6d6"/>
                <AmazonHomeCards text="Cloud Front" bgColors="#f21170"/>
            </div>
        </div>
    )
}

export default AmazonHome
