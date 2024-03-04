import styles from "./ForthScreen.module.css"
import logo from "../images/לוגו עיגול.png"
import sheharya from "../images/שחריה לופט.png"
import Who from "../components/Who"
const ForthScreen=()=>{
    return <>
    <div className={styles.container}>
    {/* <div className={styles.title}>מי אני</div> */}

    <Who logo={logo} name="שחריה לופט"  description="בצבא שירתתי כלוחם מפקד ומגבש ביחידת מגלן. אני מוסמך מטעם וינגייט ואוניברסיטת תל אביב כמאמן כושר ומאמן ריצה. בשנתיים האחרונות מאמן מאות בני נוער ומלווה אותם בדרך להתקבל ליחידה שהם תמיד חלמו עליה ! אם אתם רוצים לנצח בקרב אתם חייבים להתאמן כל יום בגישה ש " image={sheharya} />
    </div>
   </>
}
export default ForthScreen