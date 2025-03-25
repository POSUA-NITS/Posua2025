import React from 'react'
import styles from './Artist.module.scss';
import Carousel from '../../Components/Carausal/Carausal.jsx';

const Artist = () =>{
  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp" },
    { id: 2, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp" },
    { id: 3, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp" },
    { id: 4, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp" },
    { id: 5, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p87_1_z26am8.webp" },
    { id: 6, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p57_1_tlkow7.webp" },
    { id: 7, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp" },
    { id: 8, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp" },
    { id: 9, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp" },
    { id: 10, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p28_1_w1veyn.webp" },
    { id: 11, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp" },
    { id: 12, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp" },
    { id: 13, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847519/POSUA%20Gallery/2021/p61_Small_hpddcy.webp" },
    { id: 14, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56622560_2285129651551487_8015484988197699584_n_xqygo0.webp" },
    { id: 15, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783238/POSUA%20Gallery/2019/56852764_2285148264882959_2544134228656783360_n_vaau9j.webp" },
    { id: 16, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56387502_262527601367542_4087657569743536128_n_f4gpgm.webp" },
    { id: 17, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp" },
    { id: 18, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp" },
    { id: 19, url: " https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p55_1_q1nxuk.webp" },
    { id: 20, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783141/POSUA%20Gallery/2016/p131_1_qfggwi.webp" },
    { id: 21, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56242463_2285149308216188_8148921002085056512_n_xkfthk.webp" },
    { id: 22, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp" },
  ];

  return (
    <div className={styles.outerContainer}>
    <div className={styles.mainContainer}>
       <div className={styles.heading}>
           <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className={styles.image} alt='heading '/>
           <p className={styles.title}>UPCOMING ARTISTS</p>
         </div>
       <div className={styles.artist_wrapper}>
           <div className={styles.artist1}>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914289/Music_rgfcuq.gif'className={styles.leftMusic} alt='leftMusic'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa} alt='LeftPepa'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol} alt='LeftDhol'/>
              <div className= {styles.artistImage}>
                    <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg'/>
                    <div className={styles.textBox}></div>
              </div>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol} alt='RightDhol'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa} alt='RightPepa'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914289/Music_rgfcuq.gif' className={styles.rightMusic} alt='rightMusic'/>
           </div>
           <div className={styles.artist1}>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914289/Music_rgfcuq.gif' className={styles.leftMusic} alt='leftMusic'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa} alt='LeftPepa'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg'className={styles.LeftDhol} alt='LeftDhol'/>
              <div className= {styles.artistImage}>
                    <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg'/>
                    <div className={styles.textBox}></div>
              </div>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol} alt='RightDhol'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa} alt='RightPepa'/>
              <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914289/Music_rgfcuq.gif' className={styles.rightMusic} alt='rightMusic'/>
           </div>
         </div>
         <div className={styles.heading}>
           <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className={styles.image} alt='heading '/>
           <p className={styles.title}>PREVIOUS ARTISTS</p>
         </div>
         <div className={styles.prev_Artists}>
          <div className={styles.carouselWrapper}>
            <Carousel>
              {images1.map((image, index) => (
                <div key={index} className={styles.card}>
                  <img src={image.url} alt={image.alt || `Image ${index + 1}`} className={styles.cardImage} />
                  <div className={styles.textBox}></div>
                </div>
              ))}
            </Carousel>
          </div>
</div>

    </div>
    </div>
  )
}

export default Artist;
