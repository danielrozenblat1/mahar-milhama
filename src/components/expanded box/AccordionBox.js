import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./AccordionBox.module.css"
import Button2 from '../Button2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BoxButton from '../BoxButton';
 export function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: "0 0 9px 3px rgba(90, 0, 0, 0.486)",
            borderRadius:10,
          width: "100%",
          margin: "auto",
          background: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={!expanded ? <BoxButton text="לשלבי המיון"/> : <RemoveIcon/>}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply white color to content
              fontFamily: 'HeeboR',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for white color
              color: 'black',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply white color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid #9f0000', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'HeeboR'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordionNew(props) {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            direction:"rtl",
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >

{/* <DropdownAccordion title={<>

    <div id={props.id}>
    <div className={styles.icon}><img className={styles.image} src={props.image} alt="מחר מלחמה"/></div>
    <div className={styles.description}>{props.description}</div>
    <BoxButton text="לשלבי המיון" id={props.id} onClick={props.onClick} />
    </div>


</>} content={<>כן , יש אופציה של ליווי אישי , לליווי אישי יש יתרונות ויש חסרונות - הוא לא מתאים לכל אחד והמשמעת העצמית שלך תצטרך להיות גבוהה יותר ויכולות ניהול זמן גבוהות יותר , ובנוסף יש המון אקטים שקיימים רק בקבוצות לצד זה יש המון יתרונות - אתה לא תלוי באף אחד ! הליווי הוא ממוקד יותר בך ולא באף אחד אחר והההתקדמות תהיה גבוהה יותר !<br/> <Button2 msg="היי שחריה , אני אשמח לדעת עוד על הליווי האישי" text="לעוד פרטים על הליווי"/> </> }/>
<Button2 text="שחריה , אני רוצה לשמוע עוד" msg="היי שחריה אני אשמח לדעת עוד על "/> */}




      {/* <DropdownAccordion title="מה אני עושה אם אני אתקל בבעיה ? " content="אז סביר להניח שיהיו דברים מאתגרים, בשביל זה אני כאן. אני אלווה אותך בכל מהלך תוכנית ההכשרה מפתיחת החנות ועד לחנות יציבה ורווחית באיביי" />
      <Accordion
        disabled
        sx={{
          width: "50%",
          margin: "0 auto",
          background: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography></Typography>
        </AccordionSummary>
      </Accordion> */}

    </div>
  
  );
}
