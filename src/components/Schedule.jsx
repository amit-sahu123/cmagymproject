"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Schedule.module.css'; 

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const res = await fetch('https://cimauae.avmdevs.com/wp-json/custom-product/v1/slot-data/product/106');
        const data = await res.json();
        
        if (data && data.availableSlots) {
          setScheduleData(data.availableSlots);
        }
      } catch (error) {
        console.error("Failed to fetch schedule data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.scheduleContainer}>
        <h2 className={styles.scheduleheading}>when would you like to join?</h2>
      {scheduleData.map((slot, index) => (
        <div className={styles.scheduleItem} key={index}>
          <div className={styles.time}>
            {slot.time}
            <div className={styles.duration}>{slot.duration}</div>
            </div>
          <div className={styles.image}>
            <Image 
              src={slot.image} 
              alt="Class image" 
              width={50} 
              height={50} 
            />
          </div>
          <div className={styles.details}>
            <div className={styles.classTitle}>{slot.title}</div>
            <div className={styles.slotdata}>{slot.instructor}</div>
            <div className={styles.slotdata}>{slot.studio}</div>
            
          </div>
          <div className={styles.slotdata}> {slot.location}</div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
