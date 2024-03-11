import BoxButton from "../BoxButton"
import VerticalLinearStepper from "./Steps"
import styles from "./StepsScreen.module.css"
const StepsScreen=(props)=>{

console.log(props.pressed)

return <>
    {/* <div className={styles.title}>{props.title}</div> */}
    <div className={`${styles.container} ${props.pressed ? styles.open : styles.closed}`}>
<div className={styles.title}>{props.title}</div>
<VerticalLinearStepper steps={props.steps}/>
<BoxButton text="סגור" onClick={props.onClick}/>
</div>

</>


}
export default StepsScreen