import StickyNavbar from "../components/NavBar"
import styles from "./FirstScreen.module.css"
import background from "../images/רקע.png"
import { useEffect, useRef } from "react"
import snipe from "../icons/wired-lineal-134-target.json"
import { Player } from "@lordicon/react"
import Box from "../components/Box"
import { Link as ScrollLink } from "react-scroll"
const FirstScreen=()=>{
const playerRef1=useRef(null)
const playerRef2=useRef(null)

const handleComplete=()=>{
    setTimeout(()=>{
        {
            playerRef1?.current?.playFromBeginning()}
    },2500)
}
useEffect(()=>{
    playerRef1?.current?.playFromBeginning()

},[])


return <>
<StickyNavbar/>

<div className={styles.background}>
{/* <h1 className={styles.title}></div>מחר מלחמה<div className={styles.icon}><Player ref={playerRef2} size="100%" onComplete={()=>{playerRef2?.current?.playFromBeginning()}}icon={helmet}/></div></h1> */}
{/* 
<Box icon={helmet} description="רק 6 אחוז מהנבחנים עוברים יום סיירות של סיירת מטכל"/> */}
<div className={styles.title}>מחר <div className={styles.bold}>מלחמה</div></div>
<ScrollLink to="הידעת" smooth={true} duration={1500}  offset={-100}><div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={handleComplete}icon={snipe}/></div></ScrollLink>
    <h2 className={styles.subTitle}>מפעל ייצור <div className={styles.bold}>ללוחמים</div></h2>
</div>


</>



}
export default FirstScreen