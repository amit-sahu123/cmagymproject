"use client"
import styles from './Order.module.css'
import { useState, useEffect } from 'react';
import PackageSelector from './PackageSelector';
import OrderSummary from './OrderSummary';

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch('https://cimauae.avmdevs.com/wp-json/dokan/v1/stores/2/products');
        const data = await res.json();
        setPackages(data);

        // if (data.length > 0) {
        //     setSelectedPackage(data[0]);
        //   }
  

      } catch (error) {
        console.error('Failed to fetch packages:', error);
      }
    };

    fetchPackages();
  }, []);


  return (
    <div className={styles.ordercontainer}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', padding: '4px 0px' }}>Please select your package</h1>
        <PackageSelector packages={packages} onSelectPackage={setSelectedPackage} />
      </div>
      <div style={{ flex: 1,marginBottom:'10px' }}>
        <OrderSummary selectedPackage={selectedPackage} />
      </div>

       
    </div>
  );
}
