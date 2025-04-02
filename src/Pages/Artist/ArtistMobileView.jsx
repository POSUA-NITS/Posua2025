import React from "react";
import styles from "./ArtistMobileView.module.scss";
import Carousel from '../../Components/Carausal/Carausal.jsx';

const ArtistMobileView = () => {
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
     
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
            <div className={styles.extraImage1}></div>
        <div className={styles.section1}>
          <img
            src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg"
            className={styles.headingImage}
            alt="Heading Image"
          />
          <p className={styles.headingText}>UPCOMING ARTISTS</p>
        </div>
        <div className={styles.section2}>
           <div className={styles.wrapper+" min-h-[25vh]"}>
               {/* <div className={styles.profile}>
                     <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg' />
                     <div className={styles.textBox}></div>
               </div>
               <p className={styles.artistName}>Zubeen Garg</p>
               <p className={styles.assameseText}>
               অসমৰ গাঁৱে-ভূঞে, চহৰে-নগৰে অসমীয়াৰ হুচৰিক মঞ্চত উপস্থাপন কৰি দৰ্শকৰ অপূৰ্ব খ্যাতি লাভ কৰিবলৈ সক্ষম হোৱা "দেউচিলা বিহুদল" আহি আজি এন. আই. টি. ৰ বাকৰি শুৱনি কৰিছেহি। এন. আই. টি. ৰ বিহুবলীয়া ৰাইজৰ মন প্ৰাণ জিনিবলৈ নিজৰ ঢোল, পেঁপা, গগনাৰ লগতে বিভিন্ন বাদ্যযন্ত্ৰৰ সুৰেৰে আপ্লুত কৰি তুলিবলৈ সাজু "দেউচিলা বিহুদল"। ঢোলৰ চাপৰত হুঁচৰিৰ চেঁৱত আকৌ এবাৰ কঁকাল ভাঙি নাচিবলৈ, এতিয়া মাথোঁ অপেক্ষা ৫ মাৰ্চ তাৰিখলৈ। 
               </p>
               <p className={styles.englishText}>
               Spring has finally arrived, and the anticipation has culminated in the sounds of Bihu beats all around the corner. And with this, NIT Silchar is all set to host performance of 'Deusila Bihudol', a renowned folk group whose mesmerizing shows have captivated audiences and made them groove to the beats of Bihu. Brace yourselves for a magnificent cultural event as 'Deusila Bihudal' takes the stage with their drums, pepas, gaganas and various other musical instruments, ready to win the hearts of many. Hoping to see you all there promptly!

               </p> */}
               <div className='w-[90%] h-[90%] flex justify-center items-center rounded-md text-center'>
                <p className='font-moglan text-3xl'>Coming Soon..</p>
              </div>
           </div>
        </div>
        <div className={styles.section3}>
          <img
            src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg"
            className={styles.UpcomingImage}
            alt="Heading Image"
          />
          <p className={styles.upcomingText}>PREVIOUS ARTISTS</p>
        </div>
        <div className={styles.section4}>
            <div className={styles.carouselWrapper}>
              <Carousel>
                {images1.map((image, index) => (
                  <div key={index} className={styles.card}>
                    <img
                      src={image.url}
                      alt={image.alt || `Image ${index + 1}`}
                      className={styles.cardImage}
                    />
                    <div className={styles.textBox}>
                      <p className={styles.artistName}>{image.alt}</p>
                      <p className={styles.tit}>{image.tit}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ArtistMobileView;
