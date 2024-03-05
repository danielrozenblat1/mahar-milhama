
import { useEffect } from "react"
import styles from "./Group.module.css"
import ScrollReveal from "scrollreveal"
const Group=(props)=>{


useEffect(()=>{

    ScrollReveal().reveal(`.${styles.group}`, {
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
<div className={styles.group}>
<h1 className={styles.city}>{props.city}</h1>
<div className={styles.column}>
<div className={styles.data}>
<h2 className={styles.day}>{props.day1}</h2>
<h2 className={styles.hour}>{props.hour1}</h2>
</div>

<div className={styles.data}>
<h2 className={styles.day}>{props.day2}</h2>
<h2 className={styles.hour}>{props.hour2}</h2>
</div>
</div>
</div>
</>


}
export default Group