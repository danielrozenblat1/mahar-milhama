import React from 'react';
import { Link as ScrollLink } from "react-scroll"
import styles from './NavBar.module.css'; // Import your CSS module
import Button from './Button';
import logo from "../images/לוגו1.png"
const StickyNavbar = () => {
  return (
    <div className={styles.stickyNavbar}>
      <div className={styles.navLogo}><Button/></div>
      {/* <img className={styles.logo} src={logo}/> */}
      <ul className={styles.navLinks}>
     
   
   
      <ScrollLink to="מי אנחנו" smooth={true} duration={1500} offset={-100} className={styles.navLink}>מי אנחנו</ScrollLink>
  
   
        <ScrollLink to="הסימולציות" smooth={true} duration={1500}  offset={-100} className={styles.navLink}>הסימולציות</ScrollLink>
    

        <ScrollLink to="הקבוצות שלנו" smooth={true} duration={1500}  offset={-100} className={styles.navLink}>הקבוצות שלנו</ScrollLink>


        <ScrollLink to="מתאמנים ממליצים" smooth={true} duration={1500} offset={-100} className={styles.navLink}>מתאמנים ממליצים</ScrollLink>

      </ul>
    </div>
  );
};

export default StickyNavbar;