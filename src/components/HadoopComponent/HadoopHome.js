import React from 'react'
import './HadoopHome.css'
import hadooplogo from '../../images/apache_hadoop-icon.svg'
import HadoopButton from './HadoopButton.js'
import hadoopButtonData from './hadoopButtonData.js'

function HadoopHome() {
    return (
        <div className="HadoopHome">
            <img  className="HadoopHome__Icon" src={hadooplogo} alt="#"/>
            <h2 className="HadoopHome__Text">Hadoop Configuration</h2>
            <div className="HadoopHome__buttonGroup">
                {hadoopButtonData.map(item => <HadoopButton key={item.key} data={item.data}/>)}
            </div>
        </div>
    )
}

export default HadoopHome;
