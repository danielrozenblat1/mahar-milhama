
import styles from "./FifthScreen.module.css"
import reccomend1 from "../images/מחר מלחמה שחריה לופט -המלצה 1.png"
import reccomend2 from "../images/מחר מלחמה שחריה לופט -המלצה 2.png"
import reccomend3 from "../images/מחר מלחמה שחריה לופט -המלצה 3.png"
import reccomend4 from "../images/מחר מלחמה שחריה לופט -המלצה 4.png"
import reccomend5 from "../images/מחר מלחמה שחריה לופט -המלצה 5.png"
import reccomend6 from "../images/מחר מלחמה שחריה לופט -המלצה 6.png"
import reccomend7 from "../images/מחר מלחמה שחריה לופט -המלצה 7.png"
import reccomend8 from "../images/מחר מלחמה שחריה לופט -המלצה 8.png"
import reccomend9 from "../images/מחר מלחמה שחריה לופט -המלצה 9.png"
import reccomend10 from "../images/מחר מלחמה שחריה לופט -המלצה 10.png"
import reccomend11 from "../images/מחר מלחמה שחריה לופט -המלצה 11.png"
import reccomend12 from "../images/מחר מלחמה שחריה לופט -המלצה 12.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button2 from "../components/Button2"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const FifthScreen=()=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.explain}`, {
            duration: 500,
            distance: "60px",
            origin: "bottom",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.bold}`, {
            duration: 500,
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
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth > 1000 ? 3 : window.innerWidth > 850 ? 2 : 1,
        slidesToScroll:  window.innerWidth> 1000 ? 3 : window.innerWidth > 850 ? 2 : 1,
      };
      const content = [
  
           {
          type: 'image',
          src: reccomend1,
          alt:"1 מחר מלחמה שחריה לופט המלצה "
          },
     

          {
            type: 'image',
            src: reccomend2,
            alt:"2 מחר מלחמה שחריה לופט המלצה "
          },
     
          {
            type: 'image',
            src: reccomend3,
            alt:"3 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend4,
            alt:"4 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend5,
            alt:"5 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend6,
            alt:"6 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src:reccomend7,
            alt:"7 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend8,
            alt:"8 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend9,
            alt:"9 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend10,
            alt:"10 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend11,
            alt:"11 מחר מלחמה שחריה לופט המלצה "
          },
          {
            type: 'image',
            src: reccomend12,
            alt:"12 מחר מלחמה שחריה לופט המלצה "
          },
          
 
      ];
return <>

<div className={styles.container} id="מתאמנים ממליצים">

     <div className={styles.title}>עדויות מהשטח</div>
     <div className={styles.explain}>ההשפעה של האימונים בקבוצה שלנו על החוזק הפיזי והמנטלי באה לידי ביטוי אצל כל מתאמן ומתאמן שדובק בתהליך ! הנה חלק קטן מהמתאמנים שלנו</div>
     <div className={styles.sliderContainer}>
  <Slider {...sliderSettings} style={{zIndex:0}}>
    {content.map((item, index) => (
      <div key={index}>
        {item.type === 'image' && (
          <img src={item.src} className={styles.image1} alt={item.alt} />
        )}
        {item.type === 'video' && (
          <video
            style={{ width: "100%", display: "flex", objectFit: "cover", margin: "auto", height: "100%" }}
            muted
            controls
          >
            <source src={item.src} type="video/mp4" />
          </video>
        )}
      </div>
    ))}
  </Slider></div>
  <div className={styles.title}><div className={styles.bold}>כל</div> המתאמנים שלנו</div>
  <div className={styles.subTitle}>נמצאים בפורום הארצי של עילית/קומנדו/סיירות , שבה הם  <br/> <ul className={styles.ul}><li>מקבלים תשובה לכל שאלה שלהם</li> <br/><li>נמצאים בסביבה מנצחת ומעודדת להצלחה</li> <br/> <li>רוכשים את המידע הכי עדכני על ימי הגיבוש הרלוונטים עבורם</li></ul></div>
  <div className={styles.subTitle}>והכניסה אליה היא לגמרי <div className={styles.bold}>בחינם</div></div>
  <Button2 text="לפורום הארצי של עילית/קומנדו/סיירות" href={true}/>
</div>

</>


}
export default FifthScreen