import React from 'react'
import styles from './Artist.module.scss';
const Artist = () =>{
  return (
    <div className={styles.outerContainer}>
    <div className={styles.mainContainer}>
       <div className={styles.heading}> </div>
       <div className={styles.artist_wrapper}> </div>
       <div className={styles.subHeading}> </div>
       <div className={styles.prev_Artists}></div>
    </div>
    </div>
  )
}

export default Artist;
