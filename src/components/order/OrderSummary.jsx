import styles from './OrderSummary.module.css';
import { GoArrowRight } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";

const OrderSummary = ({ selectedPackage }) => {
  if (!selectedPackage) return <p>Please select a package to see the summary.</p>;

  const discount = selectedPackage.regular_price - selectedPackage.price;
  const total = selectedPackage.price;

  return (
    <div className={styles.orderSummary}>

        <h1 style={{ textAlign: 'center', fontSize: '20px' }}>
            Total: <span style={{ fontWeight: 'bold', color: 'green' }}>AED {total}</span> 
            <span style={{ textDecoration: 'line-through' }}> AED {selectedPackage.regular_price}</span>
        </h1>

        <div style={{ backgroundColor: 'black', textAlign: 'center', padding: '8px 0px', fontSize: '20px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FaRegCheckCircle style={{ marginRight: '9px' }} /> OFFER CLAIMED! You save AED {discount}
        </div>

        
       

       <div style={{padding:'10px 25px'}}>
       <div className={styles.summaryItem}>
        <span>Product</span>
        <span>{selectedPackage.name}</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Date</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Time</span>
        <span></span>
      </div>
      <div className={styles.summaryItem}>
        <span>Subtotal</span>
        <span>AED {selectedPackage.regular_price}</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Discount</span>
        <span>AED {discount}</span>
      </div>
      <hr />
      <div className={styles.total}>
        <span>Amount to pay</span>
        <span>AED {total}</span>
      </div>
      <button className={styles.payButton}>  Pay {total} AED <GoArrowRight/>  </button>


       </div>


      
    </div>
  );
};

export default OrderSummary;
