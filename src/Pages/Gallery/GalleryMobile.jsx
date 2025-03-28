import React, { useState, useEffect } from 'react';
import styles from "./GalleryMobile.module.scss";

import ViewAll from './ViewAll';
import { useNavigate } from 'react-router-dom';



const backgrounds = [
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742900799/Blur1_ztw1i1.webp',
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742900798/Blur2_ltxgwv.webp',
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742900800/Blur3_pbqr8e.webp'];
const years = ['2022', '2021', '2020'];
const sliders = [
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901177/Slider1_wkmkzm.webp',
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901177/Slider2_ds2haf.webp',
  'https://res.cloudinary.com/dybzo3xly/image/upload/v1742901178/Slider3_mwlgza.svg'];

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

  const navigate = useNavigate();
  return (
    <>
      {showAll ? (
        <ViewAll onClose={handleCloseClick} />
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.Heading}>
            <p className={styles.photoGallery}>Photo Gallery</p>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742904024/UpFlower_by8xj1.webp' className={styles.UpFlower} alt='UpFlower' />
          </div>
          <div className={styles.yearSection+" bg-cover"}
            style={{
              backgroundImage: `url(${backgrounds[currentIndex]})`,
              transition: 'background-image 1s ease-in-out',
            }}
          >
            <p className={`${styles.year_Content} ${isFading ? styles.year_Change : ''}`}>
              {years[currentIndex]}
            </p>
          </div>
          <div className={styles.photos}>
            <img src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742899873/Photo1_arrmqs.webp" className={styles.images} alt='Photo1' />
            <img src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742900022/Photo2_bumcss.webp" className={styles.images} alt='Photo2' />
            <img src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742900107/Photo3_t90h8r.webp" className={styles.images} alt='Photo3' />

          </div>
          <div className={styles.LastPart}>
            <button className={styles.button} onClick={() => navigate('/gallery/viewall')}>
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
