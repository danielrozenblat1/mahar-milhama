import styles from "./Box.module.css"
import { Player } from "@lordicon/react"
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
const Box=(props)=>{


    useEffect(()=>{
  
       
        ScrollReveal().reveal(`.${styles.description}`, {
            duration: 500,
            distance: "60px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
 
      },[])

    
    return <>
    <div className={styles.box}>
    <div className={styles.icon}><img className={styles.image} src={props.image} alt="מחר מלחמה"/></div>
    <div className={styles.description}>{props.description}</div>
    </div>
    </>
}
export default Box