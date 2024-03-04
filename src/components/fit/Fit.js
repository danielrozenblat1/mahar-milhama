
import Button2 from "../Button2"
import styles from "./Fit.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
const Fit=()=>{

    return <>
 
    <div className={styles.row}>
    
    
    <div className={styles.left}>
    <div className={styles.side}>סימולציות לגיבושים</div>
    
    <div className={styles.sentence} id="שמאל">
  24 שעות שכוללות 
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
    <div className={styles.sentence} id="שמאל">
    בוחן כושר אשר יחלק אתכם לצוותים  
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
    
              <div className={styles.sentence} id="שמאל">
              אקטים מהגיבוש
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
              <div className={styles.sentence} id="שמאל">
              תרגול ראיון אישי עם המגבשים
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
              <div className={styles.sentence} id="שמאל">
              סיכום ודירוג ביצועים פרטני עם דגשים לשימור/שיפור
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
    </div>
    
    
    <div className={styles.right}>
    <div className={styles.side}>סימולציות ליום סיירות </div>
    
    
    <div className={styles.sentence} id="ימין">
            4 שעות הכוללות
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
    
              <div className={styles.sentence} id="ימין">
              בוחן כושר אשר יחלק אתכם לצוותים 
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
    
              <div className={styles.sentence} id="ימין">
              אחד לאחד אקטים מהיום סיירות
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
              <div className={styles.sentence} id="ימין">
              תקבלו טיפים חשובים ודגשים ליום הסיירות 
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
              <div className={styles.sentence} id="ימין">
              משוב ביצועים פרטני
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
    
    </div>

    </div>
   <Button2 text="צרף אותי לקבוצת הלוחמים"/>
    
    </>
}
export default Fit