import styles from "./Button2.module.css"
import icon from "../images/לוגו עיגול.png"
const Button2=(props)=>{
    const message = props.msg || null;
    const phoneNumber = "+972527960293";
 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
         const handleClick = () => {
            if(props.msg){
    // Open the WhatsApp link when the button is clicked
    window.location.href = whatsappUrl;
            }
            if (props.href){
                window.location.href="https://chat.whatsapp.com/HG6CtTx4lpa2dTqP29GDpy"

            }
  };
   
return <div className={styles.container}>
    {/* <img className={styles.icon} src={icon} alt="מחר מלחמה לוגו"/> */}
    <button onClick={handleClick} className={styles.button}>{props.text}</button>
    {/* <img className={styles.icon} src={icon} alt="מחר מלחמה לוגו"/> */}
    </div>
}
export default Button2