import React, { useState, useEffect } from 'react';
import styles from "./Gallery.module.scss";
import Photo1 from './Photo1.png';
import Photo2 from './Photo2.png';
import Photo3 from './Photo3.png';
import slider1 from './Slider1.svg';
import slider2 from './Slider2.svg';
import slider3 from './Slider3.svg';
import pic1 from './pic1.svg';
import pic2 from './pic2.svg';
import pic3 from './pic3.svg';
import ViewAll from './ViewAll';

const backgrounds = [pic1, pic2, pic3];
const years = ['2022', '2021', '2020'];
const sliders = [slider1, slider2, slider3];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

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
              <img src={Photo1} alt='Photo1' />
            </div>
            <div className={styles.photo2}>
              <img src={Photo2} alt='Photo2' />
            </div>
            <div className={styles.photo3}>
              <img src={Photo3} alt='Photo3' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
