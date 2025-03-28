import React from 'react'
import styles from './ArtistDesktop.module.scss';
import Carousel from '../../Components/Carausal/Carausal.jsx';


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
          <div className={styles.artist1}>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.leftMusic} alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa} alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol} alt='LeftDhol' />
            <div className={styles.artistImage}>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg' />
              <div className={styles.textBox}></div>
            </div>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol} alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa} alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.rightMusic} alt='rightMusic' />
          </div>
          <div className={styles.artist1}>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.leftMusic} alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa} alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol} alt='LeftDhol' />
            <div className={styles.artistImage}>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg' />
              <div className={styles.textBox}></div>
            </div>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol} alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa} alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.rightMusic} alt='rightMusic' />
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
      </div>
    </div>
  )
}

export default ArtistDesktop;
