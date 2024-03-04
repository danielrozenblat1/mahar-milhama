import styles from "./Button2.module.css"
import icon from "../images/לוגו עיגול.png"
const Button2=(props)=>{
return <div className={styles.container}>
    {/* <img className={styles.icon} src={icon} alt="מחר מלחמה לוגו"/> */}
    <button href="" className={styles.button}>{props.text}</button>
    {/* <img className={styles.icon} src={icon} alt="מחר מלחמה לוגו"/> */}
    </div>
}
export default Button2