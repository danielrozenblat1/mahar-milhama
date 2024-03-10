import styles from "./NewImageGrid.module.css"
import grid1 from "../../images/מחר מלחמה שחריה לופט סימולציה.png"

import grid2 from "../../images/מחר מלחמה שחריה לופט סימולציה 1.png"
import grid3 from "../../images/מחר מלחמה שחריה לופט סימולציה 2.png"
import grid4 from "../../images/מחר מלחמה שחריה לופט סימולציה 3.png"
import grid5 from "../../images/מחר מלחמה שחריה לופט סימולציה 4.png"
import grid6 from "../../images/מחר מלחמה שחריה לופט סימולציה 5.png"
import grid7 from "../../images/מחר מלחמה שחריה לופט סימולציה 6.png"
import grid8 from "../../images/מחר מלחמה שחריה לופט סימולציה 7.png"
import grid13 from "../../images/מחר מלחמה שחריה לופט סימולציה 8.png"
 import grid10 from "../../images/מחר מלחמה שחריה לופט סימולציה 9.png"
 import grid14 from "../../images/מחר מלחמה שחריה לופט סימולציה 10.png"
 import grid12 from "../../images/מחר מלחמה שחריה לופט סימולציה 11.png"
 import grid15 from "../../images/grid15.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const NewImagesGrid=()=>{

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
        <div className={styles.row2}>

    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid7}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid4}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid1}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid2}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid3}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid14}/>
 
    </div>
    <div className={styles.row1}>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid10}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid13}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid8}/>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={grid6}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid12}/>
    <img className={styles.image1}  alt="מחר מלחמה שחריה לופט"src={grid5}/>
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="מחר מלחמה שחריה לופט"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>


    </div> */}
    
    </div>
    </>
    }
    export default NewImagesGrid