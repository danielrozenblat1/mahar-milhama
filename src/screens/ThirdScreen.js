import styles from "./ThirdScreen.module.css"
import matcal from "../images/סיירת מטכל.png"
import duvdevan from "../images/דובדבן סיכה.png"
import sixSixNine from "../images/669 סיכה.png"
import maglan from "../images/מגלן.png"
import shayetet from "../images/שייטת.png"
import egoz from "../images/אגוז.png"
import shaldag from "../images/שלדג.png"
import Box from "../components/Box"
import Button2 from "../components/Button2"
import Who from "../components/Who"
import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"
import StepsScreen from "../components/steps/StepsScreen"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DropdownAccordion } from "../components/expanded box/AccordionBox"
import BoxPlus from "../components/expanded box/BoxPlus"

const ThirdScreen=()=>{


const yehidot=[{id:"669",steps:[
  {
    label: 'תנאים',
    description: `פרופיל - 97 , דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:
      'מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת',
  },
  {
    label: 'שלב שני',
    description: `מעבר גיבוש מטכל או שייטת בתוצאת 669`,
  },
  {
    label: 'שלב שלישי',
    description: `יום בריכה`,
  },
  {
    label: 'שלב רביעי',
    description: `פסיכולוג וסיווג בטחוני`,
  },
]},{id:"שלדג",steps:[

  {
    label: 'תנאים',
    description: `פרופיל - 97 , דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:
      'מעבר יום סיירות בתוצאת גיבוש מטכל',
  },
  {
    label: 'שלב שני',
    description: `מעבר גיבוש מטכל בתוצאת שלדג`,
  },
  {
    label: 'שלב שלישי',
    description: `פסיכולוג וסיווג בטחוני`,
  },




]},

{id:"מגלן",steps:[

  {
    label: 'תנאים',
    description: `פרופיל - 82, דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:(
      <>
         דרך א' מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת   <br />
        דרך ב' מעבר גיבוש צנחנים
      </>
    ),
  },
  {
    label: 'שלב שני',
    description:(
      <>
דרך א' מעבר גיבוש מטכל או שייטת בהצלחה בתוצאת קומנדו וקבלה ליחידה   <br />
דרך ב' גיוס לצנחנים ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת מגלן
      </>
    ),
  },
  {
    label: 'דרך שלישית',
    description: `גיוס לחטיבת חיר ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת מגלן`,
  },
  {
    label: 'דרך רביעית',
    description: `נפילה ממסלול של יחידת עילית`,
  },


]},
{id:"דובדבן",steps:[

  {
    label: 'תנאים',
    description: `פרופיל - 82, דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:(
      <>
דרך א' מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת   <br />
דרך ב' מעבר גיבוש צנחנים
      </>
    ),
  },
  {
    label: 'שלב שני',
    description:(
      <>
דרך א' מעבר גיבוש מטכל או שייטת בהצלחה בתוצאת קומנדו וקבלה ליחידה   <br />
דרך ב' גיוס לצנחנים ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת דובדבן
      </>
    ),
  },
  {
    label: 'דרך שלישית',
    description: `גיוס לחטיבת חיר ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת דובדבן`,
  },
  {
    label: 'דרך רביעית',
    description: `נפילה ממסלול של יחידת עילית`,
  },
]},
{id:"אגוז",steps:[

  {
    label: 'תנאים',
    description: `פרופיל - 82, דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:
      'מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת',
  },
  {
    label: 'שלב שני',
    description: `מעבר גיבוש מטכל או שייטת בהצלחה בתוצאת קומנדו וקבלה ליחידה`,
  },
  {
    label: 'דרך שנייה',
    description: `גיוס לחטיבת חיר ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת אגוז`,
  },
  {
    label: 'דרך שלישית',
    description: `נפילה ממסלול של יחידת עילית`,
  },

]},
{id:"שייטת 13",steps:[

  {
    label: 'תנאים',
    description: `פרופיל - 97 , דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:(
      <>
        13 דרך א' מעבר גדנע צלילה בכיתה יא
        <br />
        דרך ב' מעבר יום סיירות בתוצאת שייטת
      </>
    ),
  },
  {
    label: 'שלב שני',
    description: `בדיקות רפואיות ומבחן פסיכוטכני`,
  },
  {
    label: 'שלב שלישי',
    description: `מעבר גיבוש שייטת`,
  },
  {
    label: 'שלב רביעי',
    description: `פסיכולוג וסיווג בטחוני`,
  },
]},


{id:"סיירת מטכל", title:"סיירת מטכל" ,steps:[

  {
    label: 'תנאים',
    description: `פרופיל - 97 , דפר - 50`,
  },
  {
    label: "שלב ראשון",
    description:
      'מעבר יום סיירות בתוצאת גיבוש מטכל',
  },
  {
    label: 'שלב שני',
    description: `מעבר גיבוש מטכל`,
  },
  {
    label: 'שלב שלישי',
    description: `פסיכולוג וסיווג בטחוני`,
  },

]}]


 

const [pressed,setPressed]=useState(false)
const [chosen,setChosen]=useState()
const [title,setTitle]=useState('')
const handleClick=(e)=>{

  if(yehidot){

      const clickedId = e.target.id;
     setTitle(clickedId)
    console.log(clickedId)
      // Find the matching item in the yehidot array
      const selectedYehida = yehidot.find((yehida) => yehida.id === clickedId);
    
      // Check if a matching item is found
      if (selectedYehida) {
        // Update state and pass the steps array to StepsScreen
        setChosen(selectedYehida.steps);
      }
      setPressed((prevState) => !prevState);

    };

}



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
          ScrollReveal().reveal(`.${styles.bold}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-in",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            beforeReveal: (domEl) => {
              domEl.style.transform = "scale(1)";
            },
            beforeReset: (domEl) => {
              domEl.style.transform = "scale(0.2)";
            },
          });
          ScrollReveal().reveal(`.${styles.go}`, {
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
  
      slidesToShow: 1, // Adjust this value to control the number of visible slides
      centerMode: true, // Enable center mode
      centerPadding: '22%', // Adjust the padding to control the amount of the next and previous slides visible
      responsive: [
        {
          breakpoint: 760,
          settings: {
         
            centerMode: true, // Enable center mode
            centerPadding: '10%',
            slidesToShow: 1,
            slidesToScroll: 1,
           
          },
        },
      ],
    };

return <>
{/* <div className={styles.container} id="הידעת">
<div className={styles.title}>הסיכויים לא לטובתך</div>
  <StepsScreen title={title} pressed={pressed} steps={chosen} onClick={handleClick}/>
<div className={styles.row}>

<Box id="669"  image={sixSixNine} description="רק 0.5-1% מבין המועמדים עוברים את המיונים ל669 בהצלחה" onClick={handleClick}/>

<Box id="דובדבן" image={duvdevan} description="רק 1-2% מבין המועמדים עוברים את המיונים לדובדבן בהצלחה" onClick={handleClick}/>
</div>
<div className={styles.row}>
<Box id="מגלן" image={maglan} description="רק 3-5% מבין המועמדים עוברים את המיונים ליחידת מגלן בהצלחה" onClick={handleClick}/>
<Box id="סיירת מטכל" image={matcal} description="רק 1.5-2% מבין המועמדים עוברים את המיונים לסיירת מטכל בהצלחה" onClick={handleClick}/>
</div>
<div className={styles.row}>
<Box id="שלדג" image={shaldag} description="רק 0.5-1% מבין המועמדים עוברים את המיונים לשלדג בהצלחה" onClick={handleClick}/>
<Box id="אגוז" image={egoz} description="רק 1-1.5% מבין המועמדים עוברים את המיונים לאגוז בהצלחה" onClick={handleClick}/>
</div> 
 <div className={styles.row}>

<Box id="שייטת 13" image={shayetet} description="רק 0.2-0.5% מבין המועמדים עוברים את המיונים לשייטת 13 בהצלחה" onClick={handleClick}/>
</div>

<div className={styles.fear}>אם אתה חולם להגיע <div className={styles.bold}>ליחידה מובחרת בצבא </div>ולעשות שירות משמעותי אתה לא יכול לשבת בחיבוק ידיים ו<div className={styles.bold}>לקוות לעבור את הגיבוש</div></div>

<div className={styles.go}>לעשות את הצעד הראשון</div>
<Button2 text="איך אני מגדיל את הסיכויים ?" msg="היי שחריה , אפשר לדעת עוד על "/>


</div> */}

      <div className={styles.container} id="הידעת">
      <div className={styles.title}>הסיכויים לא לטובתך</div>
     {/* <StepsScreen   pressed={pressed} title={title} steps={chosen} onClick={handleClick} /> */}
      <Slider {...sliderSettings} style={{zIndex:1}}>
      <DropdownAccordion title={<>
        <BoxPlus id="669"  image={sixSixNine}  itemprop="itemListElement" itemtype="https://schema.org/Product" description="רק 0.5-1% מבין המועמדים עוברים את המיונים ליחידת 669 בהצלחה" />
      </>} content={ <>
      <div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 97 , דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>מעבר גיבוש מטכל או שייטת בתוצאת 669</div>
      
      <div className={styles.label}>שלב שלישי</div>
      <div className={styles.description}>יום בריכה</div>

      <div className={styles.label}>שלב רביעי</div>
      <div className={styles.description}>פסיכולוג וסיווג בטחוני</div>
      </>} />
        {/* <Box id="669" image={sixSixNine} description="רק 1-1.5% מבין המועמדים עוברים את המיונים ל669 בהצלחה" onClick={handleClick} /> */}
        <DropdownAccordion title={<> <BoxPlus id="דובדבן"  itemprop="itemListElement" itemtype="https://schema.org/Product" image={duvdevan} description="רק 2-3% מבין המועמדים עוברים את המיונים לדובדבן בהצלחה"/> </>} content={ <>
      <div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 82, דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>דרך א' מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת   <br />
דרך ב' מעבר גיבוש צנחנים</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>דרך א' מעבר גיבוש מטכל או שייטת בהצלחה בתוצאת קומנדו וקבלה ליחידה   <br />
דרך ב' גיוס לצנחנים ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת דובדבן</div>
      
      <div className={styles.label}>דרך שלישית</div>
      <div className={styles.description}>גיוס לחטיבת חיר ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת דובדבן</div>

      <div className={styles.label}>דרך רביעית</div>
      <div className={styles.description}>נפילה ממסלול של יחידת עילית</div>
      </>}/>

      
        <DropdownAccordion title={<> <BoxPlus id="מגלן"  itemprop="itemListElement" itemtype="https://schema.org/Product" image={maglan} description="רק 2-3% מבין המועמדים עוברים את המיונים ליחידת מגלן בהצלחה"/></>} content={ <>
      <div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 82, דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>         דרך א' מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת   <br />
        דרך ב' מעבר גיבוש צנחנים</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>דרך א' מעבר גיבוש מטכל או שייטת בהצלחה בתוצאת קומנדו וקבלה ליחידה   <br />
דרך ב' גיוס לצנחנים ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת מגלן</div>
      
      <div className={styles.label}>דרך שלישית</div>
      <div className={styles.description}>גיוס לחטיבת חיר ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת מגלן</div>

      <div className={styles.label}>דרך רביעית</div>
      <div className={styles.description}>נפילה ממסלול של יחידת עילית</div>
      </>}/>





        <DropdownAccordion title={<> <BoxPlus id="סיירת מטכל"   itemprop="itemListElement" itemtype="https://schema.org/Product" image={matcal} description="רק 0.5-1% מבין המועמדים עוברים את המיונים לסיירת מטכל בהצלחה"/></>} content={ <>
      <div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 97 , דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>מעבר יום סיירות בתוצאת גיבוש מטכל</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>מעבר גיבוש מטכל</div>
      
      <div className={styles.label}>שלב שלישי</div>
      <div className={styles.description}>פסיכולוג וסיווג בטחוני</div>
      </>}/>
       <DropdownAccordion title={<>   <BoxPlus id="שלדג"  itemprop="itemListElement" itemtype="https://schema.org/Product" image={shaldag} description="רק 1-1.5% מבין המועמדים עוברים את המיונים לשלדג בהצלחה"/></>}  content={<><div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 82 , דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>מעבר יום סיירות בתוצאת גיבוש מטכל</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>מעבר גיבוש מטכל בתוצאת שלדג</div>
      
      <div className={styles.label}>שלב שלישי</div>
      <div className={styles.description}>פסיכולוג וסיווג בטחוני</div>

      </>} />
       <DropdownAccordion title={<>   <BoxPlus id="אגוז"  itemprop="itemListElement" itemtype="https://schema.org/Product" image={egoz} description="רק 2-3% מבין המועמדים עוברים את המיונים ליחידת אגוז בהצלחה" /></>} content={ <>
      <div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 82, דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>מעבר יום סיירות בתוצאת גיבוש מטכל או שייטת</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>מעבר גיבוש מטכל או שייטת בהצלחה בתוצאת קומנדו וקבלה ליחידה</div>
      
      <div className={styles.label}>דרך שנייה</div>
      <div className={styles.description}>גיוס לחטיבת חיר ויציאה לגיבוש יחטיות בתחילת הטירונות ומעבר שלו בהצלחה בתוצאת אגוז</div>

      <div className={styles.label}>דרך שלישית</div>
      <div className={styles.description}>נפילה ממסלול של יחידת עילית</div>
      </>} />
       <DropdownAccordion title={<><BoxPlus id="שייטת 13"   itemprop="itemListElement" itemtype="https://schema.org/Product" image={shayetet} description="רק 0.5-1% מבין המועמדים עוברים את המיונים לשייטת 13 בהצלחה"/></>}   content={ <>
      <div className={styles.label}>תנאים</div>
      <div className={styles.description}>פרופיל - 97 , דפר - 50</div>

      <div className={styles.label}>שלב ראשון</div>
      <div className={styles.description}>        13 דרך א' מעבר גדנע צלילה בכיתה יא
        <br />
        דרך ב' מעבר יום סיירות בתוצאת שייטת</div>
      
      <div className={styles.label}>שלב שני</div>
      <div className={styles.description}>בדיקות רפואיות ומבחן פסיכוטכני</div>
      
      <div className={styles.label}>שלב שלישי</div>
      <div className={styles.description}>מעבר גיבוש שייטת</div>

      <div className={styles.label}>שלב רביעי</div>
      <div className={styles.description}>פסיכולוג וסיווג בטחוני</div>
      </>} />


      </Slider>
      <div className={styles.fear}>אם אתה חולם להגיע <div className={styles.bold}>ליחידה מובחרת בצבא </div>ולעשות שירות משמעותי אתה לא יכול לשבת בחיבוק ידיים ו<div className={styles.bold}>לקוות לעבור את הגיבוש</div></div>

      <Button2 text="איך אני מגדיל את הסיכויים ?" msg="אני מעוניין לקבל פרטים נוספים על ההכנה שלכם " />
      <div className={styles.go}>לעשות את הצעד הראשון</div>
    </div>
</>

}
export default ThirdScreen


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#990f02" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,202.7C672,192,768,128,864,133.3C960,139,1056,213,1152,250.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}