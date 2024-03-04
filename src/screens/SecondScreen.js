
import Group from "../components/Group"
import styles from "./SecondScreen.module.css"
import { useRef,useEffect } from "react"
import { Player } from "@lordicon/react"
import helmet from "../icons/wired-lineal-1446-spartan-helmet (2).json"
import Button2 from "../components/Button2"
import Button from "../components/Button"
const SecondScreen=()=>{

    const handleComplete=()=>{
        setTimeout(()=>{
            {
                playerRef1?.current?.playFromBeginning()}
        },2500)
    }
    const playerRef1=useRef(null)
    useEffect(()=>{
        playerRef1?.current?.playFromBeginning()
    
    },[])


return <>

<div className={styles.container} id="הקבוצות שלנו">
<svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <div className={styles.groups}>הקבוצות שלנו</div>
    <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={handleComplete}icon={helmet}/></div>
    <div className={styles.row}>
<Group city="חיפה" day1="שני" hour1="18:30" day2="רביעי" hour2="20:00"/>
<Group city="אריאל" day1="ראשון" hour1="18:30" day2="חמישי" hour2="20:00"/>
</div>
<div className={styles.row}>
<Group city="ירושלים" day1="שני" hour1="19:00" day2="רביעי" hour2="20:30"/>
<Group city="באר שבע" day1="ראשון" hour1="19:00" day2="רביעי" hour2="20:30"/>
</div>
<div className={styles.center}><Button/></div>
</div>

</>



}
export default SecondScreen