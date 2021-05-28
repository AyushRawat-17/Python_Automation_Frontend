import React from 'react'
import './LinuxHome.css'
import redhatlogo from '../../images/redhat-icon.svg'
import Button from '@material-ui/core/Button';

function LinuxHome() {
    return (
        <div className="LinuxHome">
            <img  className="LinuxHome__Icon" src={redhatlogo} alt="#"/>
            <form>
                <textarea className="LinuxHome__textfield" placeholder="Enter Command to execute"/>
                <Button type="submit" className="LinuxHome__button" variant="contained" color="secondary" >
                    Execute
                </Button>
            </form>
        </div>
    )
}

export default LinuxHome;
