import { useEffect } from "react"
import Button from "./Button"
import styles from "./Who.module.css"
import ScrollReveal from "scrollreveal"
const Who=(props)=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.logo}`, {
            duration: 500,
            distance: "60px",
            origin: "left",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image}`, {
            duration: 500,
            distance: "60px",
            origin: "right",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });

    },[])
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