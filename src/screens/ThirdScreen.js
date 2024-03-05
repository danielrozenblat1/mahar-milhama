import styles from "./ThirdScreen.module.css"
import matcal from "../images/סיירת מטכל.png"
import duvdevan from "../images/דובדבן סיכה.png"
import sixSixNine from "../images/669 סיכה.png"
import maglan from "../images/מגלן.png"
import Box from "../components/Box"
import Button2 from "../components/Button2"
import Who from "../components/Who"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const ThirdScreen=()=>{
    useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.bold}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-in",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            beforeReveal: (domEl) => {
              domEl.style.transform = "scale(1)";
            },
            beforeReset: (domEl) => {
              domEl.style.transform = "scale(0.2)";
            },
          });
          ScrollReveal().reveal(`.${styles.go}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
    },[])
    
return <>
<div className={styles.container} id="הידעת">
<div className={styles.title}>הסיכויים לא לטובתך</div>

<div className={styles.row}>
<Box image={sixSixNine} description="רק 0.5-1% מבין המועמדים עוברים את המיונים ל669 בהצלחה"/>
<Box image={duvdevan} description="רק 1-2% מבין המועמדים עוברים את המיונים לדובדבן בהצלחה"/>
</div>
<div className={styles.row}>
<Box image={maglan} description="רק 3-5% מבין המועמדים עוברים את המיונים ליחידת מגלן בהצלחה"/>
<Box  image={matcal} description="רק 1.5-2% מבין המועמדים עוברים את המיונים לסיירת מטכל בהצלחה"/>
</div>
<div className={styles.fear}>אם אתה חולם להגיע <div className={styles.bold}>ליחידה מובחרת בצבא </div>ולעשות שירות משמעותי אתה לא יכול לשבת בחיבוק ידיים ו<div className={styles.bold}>לקוות לעבור את הגיבוש</div></div>

<div className={styles.go}>הצעד הראשון מתחיל עכשיו ! </div>
<Button2 text="לקבוצת הווצאפ שלנו"/>

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#990f02" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,202.7C672,192,768,128,864,133.3C960,139,1056,213,1152,250.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
</div>
</>

}
export default ThirdScreen