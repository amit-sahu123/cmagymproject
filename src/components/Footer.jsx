import React from 'react'
import { FiInstagram } from "react-icons/fi";

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
        <div className={styles.footerfirst}>
            <img src="/footerlogo.png" alt="logo" style={{ marginBottom: '20px' }}            />
            <FiInstagram color='white' fontSize="26px"  />
            <div style={{ marginTop: '40px' }} ><span style={{color:'white',fontSize:'20px'}}>2023 CIMA | </span> <span style={{color:'rgb(44, 79, 44)'}}> Privacy Policy | Cancellation Policy</span></div>
            

        </div>
        <div className={styles.footersecond}>
            <div className={styles.footerdata11}>
                <ul className={styles.footerdata11ul}>
                    <li style={{fontSize: '22px',fontWeight: 500,marginBottom: '7px'}}>OPERATING HOURS</li>
                    <li>Monday-Friday</li>
                    <li>7:00AM-10:00PM</li>
                    <li>Saturday&Sunday</li>
                    <li>8:00AM-5:00PM</li>
                </ul>


            </div>
            <div className={styles.footerdata22}>
                <ul className={styles.footerdataul22}>
                    <li  style={{fontSize: '22px',fontWeight: 500,marginBottom: '7px',color:'white' }}>CONTACT DETAILS</li>
                    <li>Binghatti Crescent,JVC, DUBAI, UAE</li>
                    <li>+971526890628</li>
                    <li>admin@cimauae.com</li>
                    <li>admin@cimauae.com</li>
                </ul>


            </div>

        </div>

    </div>
  )
}

export default Footer