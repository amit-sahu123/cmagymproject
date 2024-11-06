"use client"
import React from 'react'
import Image from 'next/image';
import styles from './Gymherosection.module.css'
import { TiTicket } from "react-icons/ti";

const Gymherosection = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/hero.png" 
        alt="Workout Image"
        layout="fill"
        objectFit="cover"
      />

      <div className={styles.overlay}>

        <div className={styles.pricetag}>
            <TiTicket/>
          <span>AED 95</span>
          <del>AED 145</del>
        </div>

        <div className={styles.title}>R & A Single Pass</div>
        
        <div className={styles.subtitle}>
          Single usage for Reformer or Aerial group classes. Valid for 1 month from purchase.
        </div>
      </div>

    </div>
  );
}



export default Gymherosection