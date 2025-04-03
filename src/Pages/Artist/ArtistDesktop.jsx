import React from 'react'
import styles from './ArtistDesktop.module.scss';
import Carousel from '../../Components/Carausal/Carausal.jsx';
import { useState } from 'react';


const ArtistDesktop = () => {
  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509260/1_hvqht0.webp", alt: "Nilotpal Borah", tit: "Singer" },
    { id: 2, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/ZubeenGarg_ybmmad.webp", alt: "Zubeen Garg", tit: "Singer" },
    { id: 3, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/Priyanka_Bharali_fzetdl.webp", alt: "Priyanka Bharali", tit: "Singer" },
    { id: 4, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607391/SrimantaShekhar_xtzq9z.webp", alt: "Srimanta Shekhar", tit: "Singer" },
    { id: 5, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607398/PaponMahanta_hg0shr.webp", alt: "Angaraag Mahanta", tit: "Singer" },

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
          <div className={styles.artist2}
            onClick={openPopup}
          >
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.leftMusic2} alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa2} alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol2} alt='LeftDhol' />
            <div className={styles.artistImage2} style={{ justifyContent: 'center', minWidth: '10rem' }}>
              {/* <div className='bg-[#f8ead0] w-[90%] h-[90%] flex justify-center items-center rounded-md text-center'>
                <p className='font-moglan laptop2:text-3xl text-xl'>Coming Soon..</p>
              </div> */}
              <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1743686164/zubli_mx2wfy.webp' className={styles.mainArtist2} style={{ objectFit: "cover" }} alt='Zublee Baruah' />
              <div className={styles.textBox2 + " text-[#c35d5a] flex flex-col items-center justify-center"}>
                <p>Zublee Baruah</p>
                <div className='border-[#c35d5a] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[80%]' />
                <p>singer</p>
              </div>
            </div>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className={styles.RightDhol2} alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className={styles.RightPepa2} alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.rightMusic2} alt='rightMusic' />
          </div>
          <div className={styles.artist1}
          //  onClick={openPopup}
          >
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className={styles.leftMusic} alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className={styles.LeftPepa} alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className={styles.LeftDhol} alt='LeftDhol' />
            <div className={styles.artistImage} style={{ justifyContent: 'center', minWidth: '10rem' }}>
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
                  <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1743686164/zubli_mx2wfy.webp' className={styles.mainArtist} alt='Zublee Baruah' />
                  <div className={styles.textBox + " text-[#c35d5a] flex flex-col items-center justify-center text-sm"}>
                    <p>Zublee Baruah</p>
                    <div className='border-[#c35d5a] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[80%]' />
                    <p>singer</p>
                  </div>
                </div>
              </div>
              <div className={styles.wrapper2}>
                <p className={styles.artistName}>Zublee Baruah</p>
                <p className={styles.assameseText}>
                  “আজি কিয় হিয়া কঁপে
                  আজি কিয় মনে নাচে
                  দুচকুতে তোমাৰে
                  সিঁচি দিলো মৰমকে
                  চিনাকি চিনাকি লাগে সেইবাবে
                  দিন জ্বলে ৰাতি জ্বলে...
                  মন জ্বলে দেহ জ্বলে…”

                  এসময়ত অসমৰ প্ৰান্তে প্ৰান্তে মুখৰিত হৈ উঠা এই গীতটি বাৰু আজিও সকলোৰে প্ৰিয় , নহয়নে?
                  এনে বহু জনপ্ৰিয় গীতৰ আঁৰৰ কণ্ঠশিল্পী গৰাকীৰ গীতৰ মূৰ্ছনাৰে এইবাৰ জীপাল হৈ উঠিব ‘পছোৱা’ৰ মঞ্চ। এক অনন্য অভিজ্ঞতাৰ সাক্ষী হৈ ৰ'বলৈ আপুনি বাৰু সাজু নে? যদি নহয়, তেন্তে সাজু হওঁক ৰাইজ.. উপভোগ কৰক এক অবিস্মৰণীয় অপূৰ্ব সন্ধ্যা... অসমৰ আপোন মাটিৰ সৌৰভত প্ৰাণ পাই উঠা লোকগীত,ভক্তিমূলক গীতৰ পৰা আদি কৰি হৃদয়স্পৰ্শী সুমধুৰ গীতৰ সমাহাৰ লৈ আহি আছে অসমৰ জনপ্ৰিয় কণ্ঠশিল্পী জুবলী বৰুৱা, অসমীয়া সংগীত জগতৰ এখন চিনাকি মুখ... যাৰ যাদুকৰী কন্ঠত ভাঁহি উঠে দুপৰৰ সুকোমল ৰ'দ এচেৰেঙা, যাৰ গীতে কঢ়িয়াই আনে এসাগৰ উপচা সপোনৰ বতৰা, যাৰ সৃষ্টিয়ে দি যায় প্ৰত্যাশিত মৃত্যুৰ মাজতো জীৱনৰ অফুৰন্ত জিজ্ঞাসা...

                  তেন্তে এইবেলি ‘পছোৱা’ত আহক সকলোৱে মিলি উদযাপন কৰোঁ অসমৰ বাৰেৰহণীয়া কৃষ্টি - সংস্কৃতি।


                  “ইফালে ঢোলৰ মাত
                  সিফালে পেঁপাৰ মাত
                  বনজুই জ্বলিছে ঐ গাত
                  জৰীবৰৰ তলতে বিহুখন পাতোগৈ ঐ
                  অ’ তেহে দেহা পৰিব শাত।
                </p>
                <p className={styles.englishText}>
                  Spring arrives with a whispering breeze, waking the Earth from its slumber with ease. Spring brings bihu, hand in hand, a timeless song across the land. And with that people, NIT Silchar has geared up with its preparations for an unforgettable evening. Yes you heard that right, Nit silchar is hosting a glorious performance by Zublee, whose mesmerizing voice and soulful melodies have the power to captivate hearts and create magic on stage. So, what's got you thinking? Join us for a night of music so good, even your playlist will be jealous! Come for the music and we guarantee that you would want to stay for the vibe. See you all there, with your crazy moves, and let everyone just stare!
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
