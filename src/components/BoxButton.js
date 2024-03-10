import styles from "./BoxButton.module.css"
import icon from "../images/לוגו עיגול.png"
import { Link as ScrollLink } from "react-scroll"
const BoxButton=(props)=>{
return <div className={styles.container}>

<button id={props.id}  onClick={props.onClick} className={styles.button}>{props.text}</button>
    
    </div>
}
export default BoxButton