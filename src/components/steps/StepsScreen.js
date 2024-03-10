import BoxButton from "../BoxButton"
import VerticalLinearStepper from "./Steps"
import styles from "./StepsScreen.module.css"
const StepsScreen=(props)=>{



return <>
    <div className={styles.title}>{props.title}</div>
<div className={styles.container}>
<div className={styles.title}>{props.title}</div>
<VerticalLinearStepper steps={props.steps}/>
<BoxButton text="סגור" onClick={props.onClick}/>
</div>

</>


}
export default StepsScreen