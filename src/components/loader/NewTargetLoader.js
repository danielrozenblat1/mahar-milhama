import styles from "./NewTargetLoader.module.css"
const NewTargetLoader=()=>{
return <>
<div className={styles.container}>
<div className={styles.icon}>
               <Player ref={playerRef1} size="100%" onComplete={handleComplete} icon={snipe} />
                  </div>
</div>
</>

}
export default NewTargetLoader