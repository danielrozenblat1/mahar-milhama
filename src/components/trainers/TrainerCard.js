import ActionAreaCard from "./Card"
import styles from "./TrainerCard.module.css"
import trainer1 from "../../images/grid1.png"
import trainer2 from "../../images/grid2.png"
import trainer3 from "../../images/grid3.png"
const TrainerCard=()=>{


    return <>
    
    <div className={styles.title}>אנחנו נהפוך אתכם לאריות</div>
    <div className={styles.row}>
    <ActionAreaCard src={trainer1} name="מורן נמייש" description=" יוצא יחידת מגלן, מאמן מנטלי וטריאתלון" background="white"/>
    <ActionAreaCard src={trainer2} name="רפאל זרביב" description="יוצא יחידת מגלן, מאמן צוות ירושלים"  background="white"/>
    <ActionAreaCard src={trainer3} name=" מאמן שלישי" description="יוצא יחידת מגלן, מאמן צוות ירושלים"  background="white"/>
    </div>
    
    
    
    </>
}
export default TrainerCard