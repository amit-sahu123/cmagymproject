import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
        <img src="/navlogo.png" alt="logo" />
        <button className={styles.navbtn}>
           Contact Us
        </button>
    </div>
  )
}

export default Navbar