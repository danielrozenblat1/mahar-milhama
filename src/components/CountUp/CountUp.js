import React from 'react';
import CountUp from 'react-countup';
import styles from "./CountUp.module.css"
const CountingUp = () => {
  return (
    <div className={styles.row}>
      <div className={styles.font}>

        <CountUp end={1450} duration={5} /> 
        <div className={styles.explain}>לוחמים לעתיד שכבר בקבוצה</div>
      </div>

 
    </div>
  );
};

export default CountingUp;