import React, { useState, useEffect } from 'react';
import styles from "./GalleryDesktop.module.scss";


import ViewAll from './ViewAll';

const backgrounds = [
    'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901479/pic1_czdese.svg',
     'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901479/pic2_wxc9wq.svg',
      'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901480/pic3_s3gey8.svg'];
const years = ['2022', '2021', '2020'];
const sliders = [
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901177/Slider1_wkmkzm.svg', 
   'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901177/Slider2_ds2haf.svg',
   'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901178/Slider3_mwlgza.svg'];

const GalleryDesktop = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewAllClick = () => setShowAll(true);
  const handleCloseClick = () => setShowAll(false);
 
  const [isFading, setIsFading] = useState(false);
// Trigger the animation when currentIndex changes
useEffect(() => {
     const interval = setInterval(() => {
       // Step 1: Start fading out
       setIsFading(true);
   
       // Step 2: Change the year after the fade-out completes (0.5s)
       setTimeout(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % years.length);
         setIsFading(false); // Step 3: Fade back in with the new year
       }, 800);
     }, 3000);
   
     return () => clearInterval(interval);
   }, []);
  return (
    <>
      {showAll ? (
        <ViewAll onClose={handleCloseClick} />
      ) : (
          <div
          className={styles.main_Container}
          style={{
            backgroundImage: `url(${backgrounds[currentIndex]})`,
            transition: 'background-image 1s ease-in-out',
            backgroundSize: 'cover'
          }}
        >
        
          <div className={styles.section1}>
            <div className={styles.headline}>
              <p className={styles.photoGallery}>Photo Gallery</p>
            </div>
            <div className={styles.wrapper1}>
            <p className={`${styles.year_Content} ${isFading ? styles.year_Change : ''}`}>
  {years[currentIndex]}
</p>

              <button className={styles.button} onClick={handleViewAllClick}>
                <span>VIEW ALL</span>
              </button>
              <img className={styles.slider} src={sliders[currentIndex]} alt='slider' />
            </div>
          </div>

          <div className={styles.section2}>
            <div className={styles.photo1}>
              <img src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742899873/Photo1_arrmqs.webp" alt='Photo1' />
            </div>
            <div className={styles.photo2}>
              <img src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742900022/Photo2_bumcss.webp"  alt='Photo2' />
            </div>
            <div className={styles.photo3}>
              <img src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742900107/Photo3_t90h8r.png" alt='Photo3' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryDesktop;
