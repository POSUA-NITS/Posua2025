import React from 'react'
import styles from './ArtistDesktop.module.scss';
import Carousel from '../../Components/Carausal/Carausal.jsx';
import { useState } from 'react';


const ArtistDesktop = () => {
  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp", alt: "Nikhil",tit:"Singer" },
    { id: 2, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp", alt: "Dikshu Shar",tit:"Singer" },
    { id: 3, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp", alt: "Zubeen Garg",tit:"Singer" },
    { id: 4, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp", alt: "Nilutpal Bo",tit:"Singer" },
    { id: 5, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p87_1_z26am8.webp", alt: "Rags",tit:"Singer" },
    { id: 6, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p57_1_tlkow7.webp", alt: "Lakshey Das",tit:"Singer" },
    { id: 7, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp",alt: "Zubeen Garg",tit:"Singer" },
    { id: 8, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp", alt: "Nikhil",tit:"Singer" },
    { id: 9, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp",alt: "Dikshu Shar",tit:"Singer" },
    { id: 10, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p28_1_w1veyn.webp", alt: "Zubeen Garg",tit:"Singer" },
    { id: 11, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp", alt: "Nilutpal Bo",tit:"Singer" },
    { id: 12, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp",alt: "Rags",tit:"Singer" },
    { id: 13, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847519/POSUA%20Gallery/2021/p61_Small_hpddcy.webp",alt: "Lakshey Das",tit:"Singer" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [popupClass, setPopupClass] = useState(styles.popupOverlay);

  const openPopup = () => {
    setIsPopupOpen(true);
    setTimeout(() => {
      setPopupClass(`${styles.popupOverlay} ${styles.active}`);
    }, 10);
  };

  const closePopup = () => {
    setPopupClass(`${styles.popupOverlay} ${styles.closing}`);
    setTimeout(() => {
      setIsPopupOpen(false);
      setPopupClass(styles.popupOverlay);
    }, 500); // Match duration with CSS transition
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.extraImage1}></div>
        <div className={styles.extraImage2}></div>
        <div className={styles.extraImage3}></div>
        <div className={styles.extraImage4}></div>
        <div className={styles.heading}>
          <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className={styles.image} alt='heading' />
          <p className={styles.title}>UPCOMING ARTISTS</p>
        </div>
        <div className={styles.artist_wrapper}>
          <div className={styles.artist1}
          //  onClick={openPopup}
           >
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.leftMusic} alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa} alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol} alt='LeftDhol' />
            <div className={styles.artistImage} style={{justifyContent: 'center', minWidth: '10rem'}}>
              <div className='bg-[#f8ead0] w-[90%] h-[90%] flex justify-center items-center rounded-md text-center'>
                <p className='font-moglan laptop2:text-3xl text-xl'>Coming Soon..</p>
              </div>
              {/* <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg' />
              <div className={styles.textBox}></div> */}
            </div>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol} alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa} alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.rightMusic} alt='rightMusic' />
          </div>
          <div className={styles.artist2} 
          //  onClick={openPopup}
           >
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.leftMusic2} alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa2} alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol2} alt='LeftDhol' />
            <div className={styles.artistImage2} style={{justifyContent: 'center', minWidth: '10rem'}}>
              <div className='bg-[#f8ead0] w-[90%] h-[90%] flex justify-center items-center rounded-md text-center'>
                <p className='font-moglan laptop2:text-3xl text-xl'>Coming Soon..</p>
              </div>
              {/* <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist2} alt='Zubeen Garg' />
              <div className={styles.textBox2}></div> */}
            </div>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol2} alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa2} alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.rightMusic2} alt='rightMusic' />
          </div>
        </div>
        <div className={styles.heading}>
          <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className={styles.image} alt='heading' />
          <p className={styles.title}>PREVIOUS ARTISTS</p>
        </div>
        <div className={styles.prev_Artists}>
          <div className={styles.carouselWrapper}>
            <Carousel>
              {images1.map((image, index) => (
                <div key={index} className={styles.card}>
                  <img src={image.url} alt={image.alt || `Image ${index + 1}`} className={styles.cardImage} />
                  <div className={styles.textBox}>
                  <p className={styles.artistName}>{image.alt}</p>
                  <p className={styles.tit}>{image.tit}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {isPopupOpen && (
        <div className={popupClass}>
    
           
             <div className={styles.wrapper}>
                      <button className={styles.closeButton} onClick={closePopup}>
                        &times;
                      </button>
                          <div className={styles.wrapper1}>
                           <div className={styles.profile}>
                                 <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg' />
                                 <div className={styles.textBox}></div>
                           </div>
                           </div>
                           <div className={styles.wrapper2}>
                           <p className={styles.artistName}>Zubeen Garg</p>
                           <p className={styles.assameseText}>
                           অসমৰ গাঁৱে-ভূঞে, চহৰে-নগৰে অসমীয়াৰ হুচৰিক মঞ্চত উপস্থাপন কৰি দৰ্শকৰ অপূৰ্ব খ্যাতি লাভ কৰিবলৈ সক্ষম হোৱা "দেউচিলা বিহুদল" আহি আজি এন. আই. টি. ৰ বাকৰি শুৱনি কৰিছেহি। এন. আই. টি. ৰ বিহুবলীয়া ৰাইজৰ মন প্ৰাণ জিনিবলৈ নিজৰ ঢোল, পেঁপা, গগনাৰ লগতে বিভিন্ন বাদ্যযন্ত্ৰৰ সুৰেৰে আপ্লুত কৰি তুলিবলৈ সাজু "দেউচিলা বিহুদল"। ঢোলৰ চাপৰত হুঁচৰিৰ চেঁৱত আকৌ এবাৰ কঁকাল ভাঙি নাচিবলৈ, এতিয়া মাথোঁ অপেক্ষা ৫ মাৰ্চ তাৰিখলৈ। 
                           </p>
                           <p className={styles.englishText}>
                           Spring has finally arrived, and the anticipation has culminated in the sounds of Bihu beats all around the corner. And with this, NIT Silchar is all set to host performance of 'Deusila Bihudol', a renowned folk group whose mesmerizing shows have captivated audiences and made them groove to the beats of Bihu. Brace yourselves for a magnificent cultural event as 'Deusila Bihudal' takes the stage with their drums, pepas, gaganas and various other musical instruments, ready to win the hearts of many. Hoping to see you all there promptly!
            
                             </p>
                             </div>
            </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default ArtistDesktop;
