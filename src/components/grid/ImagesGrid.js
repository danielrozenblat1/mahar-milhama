import styles from "./ImagesGrid.module.css"
import grid1 from "../../images/grid1.png"

import grid2 from "../../images/grid2.png"
import grid3 from "../../images/grid3.png"
import grid4 from "../../images/grid4.png"
import grid5 from "../../images/grid5.png"
import grid6 from "../../images/grid6.png"
import grid7 from "../../images/grid7.png"
import grid8 from "../../images/grid8.png"
import grid13 from "../../images/grid13.png"
import grid10 from "../../images/grid10.png"
import grid14 from "../../images/grid14.png"
import grid12 from "../../images/grid12.png"
import grid15 from "../../images/grid15.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const ImagesGrid=()=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image1}`, {
            duration: 800,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image2}`, {
            duration:1000,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image3}`, {
            duration:1200,
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

    <div className={styles.container}>
        <div className={styles.row3}>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid5}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid4}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid15}/>
    </div>
    <div className={styles.row1}>
    <img className={styles.image2}  alt="מחר מלחמה שחריה לופט"src={grid7}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid10}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid8}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid13}/>
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={image6}/>
    </div> */}
    <div className={styles.row2}>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid6}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid12}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid14}/>
    </div>
    
    </div>
    </>
    }
    export default ImagesGrid