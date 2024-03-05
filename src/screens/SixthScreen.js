import Fit from "../components/fit/Fit"
import ImagesGrid from "../components/grid/ImagesGrid"
import styles from "./SixthScreen.module.css"
const SixthScreen=()=>{

return <div className={styles.container} id="סימולציות">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,202.7C384,171,480,85,576,58.7C672,32,768,64,864,69.3C960,75,1056,53,1152,80C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
{/* <div className={styles.title}><div className={styles.bold}>שברנו </div>את החוקים</div> */}
<div className={styles.subTitle}>דמיין להגיע לגיבוש / יום סיירות ולדעת בעל פה <div className={styles.bold}>כל אקט ואקט </div></div>
<div className={styles.title}>מהיום זה אפשרי !</div>
<div className={styles.subTitle}>הכירו את הסימולציות</div>
<ImagesGrid/>
<div className={styles.subTitle}> הסימולציות מדמות לכם אחד לאחד כמו את יום המיון עצמו <br/> והן מחולקות ל2 סוגים</div>
<Fit/>
</div>

}
export default SixthScreen