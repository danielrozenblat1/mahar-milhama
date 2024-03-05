import Button from "./Button"
import styles from "./Who.module.css"
const Who=(props)=>{
    return <>
    <div className={styles.container}>
    <img className={styles.image} src={props.image} alt="מחר מלחמה"/>
    <div className={styles.column}>
    <h1 className={styles.name}>{props.name}</h1>
    <div className={styles.description}>{props.description}<h1 className={styles.name}>מחר מלחמה</h1></div>
    </div>
    <div className={styles.go}>
   <img className={styles.logo} src={props.logo} alt="מחר מלחמה"/>

    </div>
    </div>
    </>
}
export default Who