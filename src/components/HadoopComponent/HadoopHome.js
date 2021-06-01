import React from 'react'
import './HadoopHome.css'
import hadooplogo from '../../images/apache_hadoop-icon.svg'

function HadoopHome() {
    return (
        <div className="HadoopHome">
            <img  className="HadoopHome__Icon" src={hadooplogo} alt="#"/>
            <h2 className="HadoopHome__Text">Hadoop Configuration</h2>
        </div>
    )
}

export default HadoopHome;
