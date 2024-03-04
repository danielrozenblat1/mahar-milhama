import styles from "./ThirdScreen.module.css"
import matcal from "../images/סיירת מטכל.png"
import golani from "../images/סיירת גולני.png"
import givati from "../images/סיירת גבעתי.png"
import maglan from "../images/מגלן.png"
import Box from "../components/Box"
import Button2 from "../components/Button2"
import Who from "../components/Who"
const ThirdScreen=()=>{

return <>
<div className={styles.container} id="הידעת">
<div className={styles.title}>הסיכויים לא לטובתך</div>

<div className={styles.row}>
<Box image={givati} description="רק 5% מבין הנבחנים עוברים את יום הגיבוש לסיירת גבעתי"/>
<Box image={golani} description="רק 9% מבין הנבחנים עוברים את יום הגיבוש לסיירת גולני"/>
</div>
<div className={styles.row}>
<Box image={maglan} description="רק 23% מבין הנבחנים עוברים את יום הגיבוש ליחידת מגלן"/>
<Box  image={matcal} description="רק 12% מבין הנבחנים עוברים את יום הגיבוש לסיירת מטכל"/>
</div>
<div className={styles.fear}>אם אתה חולם להגיע <div className={styles.bold}>ליחידה מובחרת בצבא </div>ולעשות שירות משמעותי אתה לא יכול לשבת בחיבוק ידיים ו<div className={styles.bold}>לקוות לעבור את הגיבוש</div></div>

<div className={styles.go}>הצעד הראשון מתחיל עכשיו ! </div>
<Button2 text="לקבוצת הווצאפ שלנו"/>

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#990f02" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,202.7C672,192,768,128,864,133.3C960,139,1056,213,1152,250.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
</div>
</>

}
export default ThirdScreen