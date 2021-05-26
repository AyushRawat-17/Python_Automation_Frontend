import React from 'react';
import './ServiceGrid.css';
import awsicon from '../../images/aws.svg'
import apacheicon from '../../images/apache.svg'
import dockericon from '../../images/docker.svg'
import redhaticon from '../../images/redhat-icon.svg'
import hadoopicon from '../../images/apache_hadoop-icon.svg'
import ServiceCard from './ServiceCard.js'

function ServiceGrid() {
    return (
        <div className="ServiceGrid">
            <ServiceCard iconImage={awsicon} cardText="Manage AWS"/>
            <ServiceCard iconImage={apacheicon} cardText="Manage Apache Webserver"/>
            <ServiceCard iconImage={dockericon} cardText="Manage Docker"/>
            <ServiceCard iconImage={redhaticon} cardText="Manage Linux"/>
            <ServiceCard iconImage={hadoopicon} cardText="Manage Hadoop Cluster"/>
        </div>
    )
}

export default ServiceGrid;
