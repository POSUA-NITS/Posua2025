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
    { id: 4, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607391/SrimantaShekhar_xtzq9z.webp", alt: "Simanta Shekhar", tit: "Singer" },
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
            <p className={styles.artistName}>Zublee</p>
            <p className={styles.assameseText}>
              <br />
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
              <br />
              Spring arrives with a whispering breeze, waking the Earth from its slumber with ease. Spring brings bihu, hand in hand, a timeless song across the land. And with that people, NIT Silchar has geared up with its preparations for an unforgettable evening. Yes you heard that right, Nit silchar is hosting a glorious performance by Zublee, whose mesmerizing voice and soulful melodies have the power to captivate hearts and create magic on stage. So, what's got you thinking? Join us for a night of music so good, even your playlist will be jealous! Come for the music and we guarantee that you would want to stay for the vibe. See you all there, with your crazy moves, and let everyone just stare!
            </p>
          </div>
            : <div className={styles.wrapper + " min-h-[25vh]"}>
              <div className={styles.profile}>
                <img src='https://res.cloudinary.com/dmezugavw/image/upload/v1743767974/WhatsApp_Image_2025-04-04_at_17.22.54_215e91e6_mjkier.jpg' className={styles.mainArtist} alt='Zubeen Garg' />
                <div className={styles.textBox + " text-[#c35d5a] flex flex-col items-center justify-center text-sm"}>
                  <p>Patkai</p>
                  <div className='border-[#c35d5a] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[80%]' />
                  <p>band</p>
                </div>
              </div>
              <p className={styles.artistName}>Patkai</p>
              <p className={styles.assameseText}>
                সূর্য অস্ত যোৱা আৰু সন্ধিয়াৰ মৃদু বতাহে পৃথিৱীৰ প্ৰতিধ্বনি কঢ়িয়াই অনাৰ লগতেই পছোৱাৰ মঞ্চ সাজু হ'বলৈ লৈছে পাতকাই লোক দল ক আমন্ত্রিত কৰিবলৈ।
                <br />
                ঢোল, পেঁপা আৰু অসমৰ লোক সংস্কৃতিৰ এক মনোৰম সংমিশ্রণ, পাতকাই আহিছে  এক নতুন প্ৰতিধ্বনি লৈ। ঝুমুৰৰ মধুৰ ধ্বনিৰ পৰা আদি কৰি বিহুৰ উৎফুল্লিত কৰি তোলা শক্তি- পাতকাই হ'ল একতাৰ প্ৰতীক।
                <br />
                আহক ৰাইজ, সকলোৱে একেলগ হৈ উপভোগ কৰো সুৰৰ প্ৰতিধ্বনিৰে ভৰা এক নিশা, য'ত প্ৰত্যেক তালে কঢ়িয়াই আনে এক নতুন গল্প।              </p>
              <p className={styles.englishText}>
                <br />
                As the sun sets and the evening breeze carries the echoes of our land, let the soul of Assam come alive through Patkai – a mesmerizing folk group performance at Posua 2025!
                <br />
                With the rhythmic beats of the dhol, the enchanting tunes of the pepa, and the vibrant energy of our folk traditions, Patkai brings together the spirit of Assam’s diverse communities on one stage. From the raw power of Jhumur to the graceful sways of Bihu, each performance is a tribute to the roots that bind us.
                <br />
                Join us as tradition meets celebration, where every beat tells a story. Let the night resonate with the folk melodies that have echoed through generations!
              </p>
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
