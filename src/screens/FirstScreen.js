import StickyNavbar from "../components/NavBar"
import styles from "./FirstScreen.module.css"
import background from "../images/background1.png"
import { useEffect, useRef, useState } from "react"
import snipe from "../icons/wired-lineal-134-target.json"
import { Player } from "@lordicon/react"
import Box from "../components/Box"
import ScrollReveal from "scrollreveal"
import { Link as ScrollLink } from "react-scroll"
import TimeLoader from "../components/loader/TimeLoader"
import TargetLoader from "../components/loader/TargetLoader"
const FirstScreen = () => {
    const [isLoading, setIsLoading] = useState(true); // Image loading state
    const playerRef1=useRef(null)
    const handleComplete=()=>{
        setTimeout(()=>{
            {
                playerRef1?.current?.playFromBeginning()}
        },2500)
    }


    


    useEffect(() => {
      // Pre-load the image
      playerRef1?.current?.playFromBeginning()
      const image = new Image();
      image.src = background; // Set image source
  
      image.onload = () => {
      
        setIsLoading(false); // Set loading state to false only when image loads
        setTimeout(()=>{
            {
                playerRef1?.current?.playFromBeginning()}
        },50)
      };


    }, []); // Empty dependency array to run only once on component mount

    return (
      <>
      
  
        <div itemScope itemType="https://schema.org/WebPage" >
          {/* Display the loading component while the image is loading */}
          {isLoading && <TargetLoader />}
  
          {/* Only display the content (including the image) after loading */}
          {!isLoading && (
            <>
              <StickyNavbar />
              <div
                // Apply image as background
                className={styles.background} // Add a class for content styling
              >
                {/* Rest of your content */}
                <div className={styles.title} itemProp="name">
                  מחר <div className={styles.bold}>מלחמה</div>
                </div>
                {/* ... your other content here ... */}
           
                <div className={styles.icon}>
               <Player ref={playerRef1} size="100%" onComplete={handleComplete} icon={snipe} />
                  </div> 
               
                <h2 className={styles.subTitle} itemProp="description">
                  הכנה מקצועית לצבא
                </h2>
              </div>
            </>
          )}
        </div>
      </>
    );
  };
  
  export default FirstScreen;

