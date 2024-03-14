import React from 'react';
import { Link as ScrollLink } from "react-scroll"
import styles from './NavBar.module.css'; // Import your CSS module
import Button from './Button';
import logo from "../images/לוגו עיגול.png"
import Button2 from './Button2';
const StickyNavbar = () => {
  return <>
       {window.innerWidth < 850 && <div className={styles.smallNav}><Button2 text="לעוד פרטים" msg="אני מעוניין לקבל פרטים נוספים על ההכנה שלכם 🥷🏻"/>
       {window.innerWidth >= 550 && window.innerWidth<=850 && <img className={styles.logo} src={logo} alt="מחר מלחמה"/> }</div>}       
       {window.innerWidth > 850 &&  <div className={styles.stickyNavbar}>
       <div className={styles.navLogo}><Button msg="אני מעוניין לקבל פרטים נוספים על ההכנה שלכם 🥷🏻"/></div>
       <ul className={styles.navLinks}>
   

    <ScrollLink to="מי אנחנו" smooth={true} duration={1500} offset={-100} className={styles.navLink}>מי אנחנו</ScrollLink>
     <ScrollLink to="הסימולציות" smooth={true} duration={1500}  offset={-100} className={styles.navLink}>הסימולציות</ScrollLink>
     <ScrollLink to="הצוותים שלנו" smooth={true} duration={1500}  offset={-100} className={styles.navLink}>הצוותים שלנו</ScrollLink>
     <ScrollLink to="מתאמנים ממליצים" smooth={true} duration={1500} offset={-100} className={styles.navLink}>מתאמנים ממליצים</ScrollLink>
   </ul>
 </div>}

</>
};

export default StickyNavbar;