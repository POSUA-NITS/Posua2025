import React from "react";
import styles from "./ArtistMobileView.module.scss";
import Carousel from '../../Components/Carausal/Carausal.jsx';
import { useSwipeable } from "react-swipeable";
import { useState } from "react";


const ArtistMobileView = () => {


  const [isActive, setIsActive] = useState(true);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsActive(false),
    onSwipedRight: () => setIsActive(true),
  });

  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509260/1_hvqht0.webp", alt: "Nilotpal Borah", tit: "Singer" },
    { id: 2, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/ZubeenGarg_ybmmad.webp", alt: "Zubeen Garg", tit: "Singer" },
    { id: 3, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/Priyanka_Bharali_fzetdl.webp", alt: "Priyanka Bharali", tit: "Singer" },
    { id: 4, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607391/SrimantaShekhar_xtzq9z.webp", alt: "Srimanta Shekhar", tit: "Singer" },
    { id: 5, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607398/PaponMahanta_hg0shr.webp", alt: "Angaraag Mahanta", tit: "Singer" },

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
        <div  {...handlers} className={styles.section2}>
          {isActive ? <div className={styles.wrapper + " min-h-[25vh]"}>
            <div className={styles.profile}>
              <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1743686164/zubli_mx2wfy.webp' className={styles.mainArtist} alt='Zubeen Garg' />
              <div className={styles.textBox + " text-[#c35d5a] flex flex-col items-center justify-center text-sm"}>
                <p>Zublee Baruah</p>
                <div className='border-[#c35d5a] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[80%]' />
                <p>singer</p>
              </div>
            </div>
{/*             <p className={styles.artistName}>Zubeen Garg</p> */}
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
              অ’ তেহে দেহা পৰিব শাত।</p>
            <p className={styles.englishText}>
              Spring arrives with a whispering breeze, waking the Earth from its slumber with ease. Spring brings bihu, hand in hand, a timeless song across the land. And with that people, NIT Silchar has geared up with its preparations for an unforgettable evening. Yes you heard that right, Nit silchar is hosting a glorious performance by Zublee, whose mesmerizing voice and soulful melodies have the power to captivate hearts and create magic on stage. So, what's got you thinking? Join us for a night of music so good, even your playlist will be jealous! Come for the music and we guarantee that you would want to stay for the vibe. See you all there, with your crazy moves, and let everyone just stare!
            </p>
{/*             <div className='w-[90%] h-[90%] flex justify-center items-center rounded-md text-center'>
              <p className='font-moglan text-3xl'>Coming Soon..</p>
            </div> */}
          </div>
            : <div className={styles.wrapper + " min-h-[25vh]"}>
              {/* <div className={styles.profile}>
                     <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/Zubeen_kalp5x.svg' className={styles.mainArtist} alt='Zubeen Garg' />
                     <div className={styles.textBox}></div>
               </div>
               <p className={styles.artistName}>Papon Mahonta</p>
               <p className={styles.assameseText}>
               অসমৰ গাঁৱে-ভূঞে, চহৰে-নগৰে অসমীয়াৰ হুচৰিক মঞ্চত উপস্থাপন কৰি দৰ্শকৰ অপূৰ্ব খ্যাতি লাভ কৰিবলৈ সক্ষম হোৱা "দেউচিলা বিহুদল" আহি আজি এন. আই. টি. ৰ বাকৰি শুৱনি কৰিছেহি। এন. আই. টি. ৰ বিহুবলীয়া ৰাইজৰ মন প্ৰাণ জিনিবলৈ নিজৰ ঢোল, পেঁপা, গগনাৰ লগতে বিভিন্ন বাদ্যযন্ত্ৰৰ সুৰেৰে আপ্লুত কৰি তুলিবলৈ সাজু "দেউচিলা বিহুদল"। ঢোলৰ চাপৰত হুঁচৰিৰ চেঁৱত আকৌ এবাৰ কঁকাল ভাঙি নাচিবলৈ, এতিয়া মাথোঁ অপেক্ষা ৫ মাৰ্চ তাৰিখলৈ। 
               </p>
               <p className={styles.englishText}>
               Spring has finally arrived, and the anticipation has culminated in the sounds of Bihu beats all around the corner. And with this, NIT Silchar is all set to host performance of 'Deusila Bihudol', a renowned folk group whose mesmerizing shows have captivated audiences and made them groove to the beats of Bihu. Brace yourselves for a magnificent cultural event as 'Deusila Bihudal' takes the stage with their drums, pepas, gaganas and various other musical instruments, ready to win the hearts of many. Hoping to see you all there promptly!

               </p> */}
{/*               <div className='w-[90%] h-[90%] flex justify-center items-center rounded-md text-center'>
                <p className='font-moglan text-3xl'>Coming Soon..</p>
              </div> */}
            </div>
          }

          <div className="flex justify-center mt-4">
            <span className={`w-3 h-3 mx-1 rounded-full transition-all ${isActive ? "bg-[#e7bb67]" : "bg-gray-300"}`}></span>
            <span className={`w-3 h-3 mx-1 rounded-full transition-all ${!isActive ? "bg-[#e7bb67]" : "bg-gray-300"}`}></span>
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
