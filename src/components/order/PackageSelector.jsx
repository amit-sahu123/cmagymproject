"use client"
import { useState,useEffect } from 'react';
import styles from './PackageSelector.module.css';

const PackageSelector = ({ packages, onSelectPackage }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);


  useEffect(() => {
    if (packages.length > 0) {
      setSelectedPackage(packages[0]);
      onSelectPackage(packages[0]);
    }
  }, [packages, onSelectPackage]);


  const handleSelect = (pkg) => {
    setSelectedPackage(pkg);
    onSelectPackage(pkg);
  };

  return (
    <div className={styles.packageSelector}>
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className={`${styles.packageCard} ${selectedPackage?.id === pkg.id ? styles.selected : ''}`}
          onClick={() => handleSelect(pkg)}
        >
          <h3>{pkg.name}</h3>
          <p className={styles.price}>
            AED {pkg.price} <span className={styles.originalPrice}>AED {pkg.regular_price}</span>
          </p>
          
          <div
            className={styles.orderbox}
            dangerouslySetInnerHTML={{ __html: pkg.description }}
          />

         
          
        </div>
      ))}
    </div>
  );
};

export default PackageSelector;
