import ActionAreaCard from "./Card"
import styles from "./TrainerCard.module.css"
import trainer1 from "../../images/grid2.png"
import trainer2 from "../../images/grid3.png"
import trainer3 from "../../images/מאמן שלישי.png"
import trainer4 from "../../images/מתן עמוס.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import Slider from "react-slick"
const TrainerCard=()=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 100,
            delay: 200,
            scale: 1,
          });
        },[])
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: window.innerWidth > 750 ? 2 : 1,
            slidesToScroll:  window.innerWidth> 750 ? 2 : 1,
          };
    return <>
    
    <div className={styles.title} id="מי אנחנו">אנחנו נהפוך אתכם לאריות</div>
    <div className={styles.row}>
    {/* להוסיף פה קרוסלה */}
    <div className={styles.sliderContainer}>
  <Slider {...sliderSettings} style={{zIndex:0}}>

  <ActionAreaCard src={trainer1} name="מורן נמייש" description="  מאמן צוות חיפה , יוצא יחידת מגלן, מאמן מנטלי וטריאתלון" background="white"/>
    <ActionAreaCard src={trainer2} name="רפאל זרביב" description="מאמן צוות ירושלים ,יוצא יחידת מגלן"  background="white"/>
   
    <ActionAreaCard src={trainer3} name=" שלום ריבן" description="מאמן צוות אריאל
יוצא יחידת מגלן, למד בוינגייט במהלך השירות"  background="white"/>
 <ActionAreaCard src={trainer4} name="מתן עמוס" description="מאמן צוות באר שבע , יוצא סיירת חרוב מתאמן ומתחרה בקרוספיט"  background="white"/>
  </Slider></div>
  
    </div>
    
    
    
    </>
}
export default TrainerCard