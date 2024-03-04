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
const ImagesGrid=()=>{
    return <>
    <div className={styles.container}>
        <div className={styles.row3}>
    <img className={styles.image1} src={grid5}/>
    <img className={styles.image1} src={grid4}/>
    <img className={styles.image1} src={grid15}/>
    </div>
    <div className={styles.row1}>
    <img className={styles.image2} src={grid7}/>
    <img className={styles.image1} src={grid10}/>
    <img className={styles.image3} src={grid8}/>
    <img className={styles.image3} src={grid13}/>
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3} src={image6}/>
    </div> */}
    <div className={styles.row2}>
    <img className={styles.image3} src={grid6}/>
    <img className={styles.image3} src={grid12}/>
    <img className={styles.image3} src={grid14}/>
    </div>
    
    </div>
    </>
    }
    export default ImagesGrid