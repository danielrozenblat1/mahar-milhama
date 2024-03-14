import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button2 from '../Button2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 0px 3px 1px #9f0000',
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
          expandIcon={!expanded ? <AddIcon/> : <RemoveIcon/>}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
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

export default function BasicAccordion() {
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
      {/* Center parent container */}
      {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000026" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,117.3C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="0 0 1440 320"><path fill="" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,138.7C640,171,800,245,960,266.7C1120,288,1280,256,1360,240L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <div className={styles.title}>שאלות נפוצות</div>
      <DropdownAccordion title="אני בתקופה עמוסה בחיים כרגע , איך זה יכול להשתלב עם האימונים?" content="תקופות עמוסות תמיד יהיו, החכמה זה לדעת לשלב. ביחידות המיוחדות מחפשים אנשים שלא נותנים לשום דבר שבדרך להפריע להם להשיג את המטרות שלהם, בעיקר כשקשה! בעיקר כשלא נוח!! והם גם אלה שתראו עוברים בהצלחה את הגיבוש. שבו עם עצמכם ונהלו את המשימות והלוז שלכם ככה שאתם תשלטו בו ולא הוא בכם. פתאום תגלו איך אתם כן מצליחים לשלב" />
      <DropdownAccordion title="אני יכול להתאמן בעצמי , למה שאצטרך אימונים בקבוצה?" content="תמיד אפשר להתאמן לבד. אבל מה שאתה מפסיד הם הידע הניסיון והליווי המקצועי של המאמן, הסביבה התחרותית והתומכת של הצוות שתמיד תגרום לך להוציא יותר מעצמך, שימוש באלונקה שהיא אחד האלמנטים הקריטיים והחשובים בהכנה לצבא. ובסוף בגיבוש אתה הולך להתחרות בקבוצה וכדאי מאוד שזאת גם תהיה הדרך שאתה מתאמן. בסופו של דבר תשאל את עצמך איזו דרך יכולה לתרום ולעזור לך יותר בדרך למטרה שלך?"/>
      <DropdownAccordion title= "כל המידע נמצא היום ברשת - למה שאצטרף לקבוצה הווצאפ אם אני יכול לחפש בגוגל?" content="זה נכון שהיום קיים מידע רב באינטרנט אבל חשוב להבין שהצבא זאת מערכת שמשתנה ומתעדכנת כל הזמן. ולעומת זאת רוב המידע שקיים כיום באינטרנט לא עדכני ולא רלוונטי, במקום לשבור את הראש בקהילה שלנו אתם יכולים לקבל מענה ותשובות ממקור ראשון על מה קרה במיונים האחרונים, ימי סיירות, גיבושים, ראיונות וכל מידע שאתם רק רוצים לדעת על הכנה לצבא. וכל זה ללא שום עלות, אנחנו מאמינים בלהנגיש לכל מלשב כל מידע שיכול לעזור לו וכל מה שצריך זה פשוט להכנס ולשאול"/>
      <DropdownAccordion title="אני לא בטוח ב100% שאני רוצה שירות ביחידה קרבית" content="שירות קרבי בצהל זאת אחת החוויות היותר משמעותיות שיכולות להיות למי שחי בחברה הישראלית עם ידע חברים וכלים שיכולים ללוות אותך אחר כך לאורך כל החיים. הצטרפות לקהילה שלנו ואפילו מפגש עם הצוות והמאמן באימון ניסיון יכולה לעזור לך להבין אם זה משהו שאתה רוצה ויכול להתאים לך"/>

<DropdownAccordion title="אני לא נמצא באף אזור שיש בו את קבוצות האימון , יש חלופה לקבוצות האימונים?" content="אני מאמין ששום מרחק לא יכול לעצור בנאדם חדור מטרה ועדות לכך היא מתאמנים שלנו שמגיעים מרחוק ונוסעים מעל לשעה בתחבורה ציבורית לאימונים בצוותים. אך קיימת אצלנו גם אפשרות לבניית תוכנית אימונים מותאמת אישית ותהליך ליווי מרחוק למי שמעדיף, שיחד עם שילוב השתתפות בסימולציות שלנו זה יכול להיות תחליף איכותי לאימון בצוות" />

<DropdownAccordion title="תוך כמה זמן אני נכנס לכושר שמספיק לעבור יום סיירות?" content=". משתנה בין בנאדם לבנאדם ורק רמת הרצינות ההשקעה וההתמדה תקבע את קצב ההתקדמות שלך. ביום הסיירות אתה מתמודד מול נערים אחרים וגם כאלה שמתאמנים שנתיים ואף יותר ולכן אני ממליץ להתחיל כמה שיותר מוקדם (אצלנו ניתן להצטרף החל מגיל 15) אם זאת אני יכול לומר שיש לנו מתאמנים שגם לאחר חצי שנה הגיעו לכושר הנדרש ליום סיירות אבל מצד שני שמעתי גם על הרבה שהיו שאננים, חיכו וכשהיום סיירות הגיע הם לא היו מוכנים. אל תחכו! תתחילו היום!!" />
<DropdownAccordion title="קשה לי להתאמן בקבוצה , יש אופציה אחרת לאימונים?" content={<>כן , יש אופציה של ליווי אישי , לליווי אישי יש יתרונות ויש חסרונות - הוא לא מתאים לכל אחד והמשמעת העצמית שלך תצטרך להיות גבוהה יותר ויכולות ניהול זמן גבוהות יותר , ובנוסף יש המון אקטים שקיימים רק בקבוצות לצד זה יש המון יתרונות - אתה לא תלוי באף אחד ! הליווי הוא ממוקד יותר בך ולא באף אחד אחר והההתקדמות תהיה גבוהה יותר !<br/> <Button2 msg="אני מעוניין לקבל פרטים נוספים על הליווי האישי " text="לעוד פרטים על הליווי"/> </> }/>
<Button2 text="שחריה , אני רוצה לשמוע עוד" msg="אני מעוניין לקבל פרטים נוספים על ההכנה שלכם"/>




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
