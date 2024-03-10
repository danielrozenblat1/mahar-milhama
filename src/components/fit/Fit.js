
import { useEffect } from "react"
import Button2 from "../Button2"
import styles from "./Fit.module.css"
import ScrollReveal from "scrollreveal"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
const Fit=()=>{
useEffect(()=>{
    ScrollReveal().reveal(`#שמאל`, {
        duration: 500,
        distance: "60px",
        origin: "left",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 100,
        delay: 200,
        scale: 1,
      });
      ScrollReveal().reveal(`#ימין`, {
        duration: 500,
        distance: "60px",
        origin: "right",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 100,
        delay: 200,
        scale: 1,
      });
},[])

    return <>
 
    <div className={styles.row}>
    
    
    <div className={styles.left}>
    <div className={styles.side} id="שמאל">גיבושים</div>
    
    <div className={styles.sentence} id="שמאל">
    24 שעות בהובלת מגבשים של יחידות העילית שכוללות

                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
    <div className={styles.sentence} id="שמאל">
    אקטים מהגיבוש, מסעות, הקפצות, משימות חשיבה ודינמיקה קבוצתית שיקחו אתכם לקצה הפיזי והמנטלי ויגרמו לגיבוש להראות הרבה יותר פשוט לאחר מכן
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
    
              <div className={styles.sentence} id="שמאל">
              סיכום אישי אחד על אחד עם המגבשים ומשוב אישי פרטני + תרגול ראיון אישי
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
              <div className={styles.sentence} id="שמאל">
              סיכום קבוצתי עם המגבשים הכולל דגשים לשיפור ושימור והסבר על מה בדיוק אותן יחידות מחפשות בגיבוש
                {/* <FontAwesomeIcon icon={faTimes} className={styles.timesIcon} /> */}
              </div>
        
    </div>
    
    
    <div className={styles.right}>
    <div className={styles.side} id="ימין">סימולציות ליום סיירות </div>
    
    
    <div className={styles.sentence} id="ימין">
    4 שעות בהובלת מגבשים יוצאי יחידות מובחרות הכוללות
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
    
              <div className={styles.sentence} id="ימין">
              בוחן כושר אשר יחלק אתכם לצוותים
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
    
              <div className={styles.sentence} id="ימין">
              אקטים אחד לאחד כמו ביום סיירות
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
              <div className={styles.sentence} id="ימין">
              כל משתתף מקבל אצלנו לאחר הסימולציה משוב ביצועים פרטני על הביצועים שלו באקטים
                {/* <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> */}
              </div>
              {/* <div className={styles.sentence} id="ימין">
              בחלק של התיאור של הסימולציות
             
              </div> */}
    
    </div>

    </div>
   <Button2 text="לעוד פרטים על הסימולציות" msg="היי שחריה , אשמח לדעת עוד על הסימולציות"/>
    
    </>
}
export default Fit
{/* <div className={styles.sentence} id="שמאל">
סיכום ודירוג ביצועים פרטני עם דגשים לשימור/שיפור

</div> */}