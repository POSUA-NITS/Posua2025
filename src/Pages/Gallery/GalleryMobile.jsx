import React, { useState, useEffect } from 'react';
import styles from "./GalleryMobile.module.scss";
import Photo1 from './Photo1.png';
import Photo2 from './Photo2.png';
import Photo3 from './Photo3.png';
import slider1 from './Slider1.svg';
import slider2 from './Slider2.svg';
import slider3 from './Slider3.svg';
import pic1 from './Blur1.svg';
import pic2 from './Blur2.png';
import pic3 from './Blur3.svg';
import UpFlower from './UpFlower.png';
import ViewAll from './ViewAll';

const backgrounds = [pic1, pic2, pic3];
const years = ['2022', '2021', '2020'];
const sliders = [slider1, slider2, slider3];

const GalleryMobile = () => {
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
          <div className={styles.mainContainer}>
              <div className={styles.Heading}>
                   <p className={styles.photoGallery}>Photo Gallery</p>
                   <img src={UpFlower} className={styles.UpFlower} alt='UpFlower' />
              </div>
              <div className={styles.yearSection}
                 style={{
                    backgroundImage: `url(${backgrounds[currentIndex]})`,
                    transition: 'background-image 1s ease-in-out',
                    backgroundSize: 'cover'
                  }}
              >
                  <p className={`${styles.year_Content} ${isFading ? styles.year_Change : ''}`}>
                    {years[currentIndex]}
                  </p>
              </div>
              <div className={styles.photos}>
                  <img src={Photo1} className={styles.images} alt='Photo1' />
                  <img src={Photo2} className={styles.images} alt='Photo2' />
                  <img src={Photo3} className={styles.images} alt='Photo3' />

              </div>
              <div className={styles.LastPart}>
                    <button className={styles.button} onClick={handleViewAllClick}>
                                    <span>VIEW ALL</span>
                                </button>
                    <img className={styles.slider} src={sliders[currentIndex]} alt='slider' />
                    

              </div>
          </div>
      )}
    </>
  );
};

export default GalleryMobile;
