import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LiaChevronCircleUpSolid, LiaChevronCircleDownSolid } from "react-icons/lia";

const slidesData = [
    { id: 1, imgSrc: "https://res.cloudinary.com/dp92qug2f/image/upload/v1711691101/event_2_1_wj47v4-min_j34osv.webp", head: "Manthan", message:"Manthan is the highlight of POSUA, as it showcases the best performers from Assam to enthral everyone on the campus In previous years, famous artists such as Zubeen Garg, Priyanka Bharali, Dikshu, and Simanta Shekhar have blessed the Manthan stage with their amazing performances." },
    { id: 2, imgSrc: "https://res.cloudinary.com/dp92qug2f/image/upload/v1711607067/event_4_1_h18snd.webp", head: "Rongili", message:"The art of dance conjures an exhilarating trance for both spectators and performers alike. Among the array of events hosted by Posua is 'Rongili', the Female Bihu Dance Competition, offering a platform for participants to exhibit their dancing skills and convey their adoration for Bihu." },
    { id: 3, imgSrc: "https://res.cloudinary.com/dp92qug2f/image/upload/v1711607068/event_5_1_jdfhue.webp", head: "Patkaair Ipare", message:"Patkair Ipare is a quiz to embark on an enchanting journey through Assam's vibrant culture, mesmerizing traditions, and breathtaking landscapes! " },
    { id: 4, imgSrc: "https://res.cloudinary.com/dp92qug2f/image/upload/v1711607068/event_1_1_oisdi6.webp", head: "Bordoisila", message:"The NITS campus gets alive with captivating performances by the stunning 'Gabhorus', adorned in exquisite golden silk. It resembles the seasonal wind rushing back to her familial abode, bustling with fervor. " },
    { id: 3, imgSrc: "https://res.cloudinary.com/dp92qug2f/image/upload/v1711607067/event_3_1_bzv7wz.webp", head: "Abhijatri", message:"The true measure of our society's strength lies in our ability to embrace diversity and foster unity. Over the years, 'Bor-Axom' has embraced numerous communities and tribes, enriching the tapestry of the Greater Assamese Culture. " },
    { id: 3, imgSrc: "https://res.cloudinary.com/dp92qug2f/image/upload/v1711607068/event_6_1_midhea.webp", head: "Krishti", message:"The festival of Krishti gives a unique chance to see the beauty of time and to feel the complex cultural mix of the people who have lived in this land for ages, creating a splendid society that shows the combination of these different cultures. No matter where we live along the Barak or Brahmaputra rivers, we are all connected by a lovely fabric made of the golden threads of our cultural legacy. " },
  ];

const Events = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);
    
  return (
    <div className="bg-[#F8EAD0] min-h-screen h-full w-full flex flex-col items-center text-center relative pt-[12vh]">
      {/* Side Lines */}
      <div className="absolute top-0 mobile2:left-[10vw] laptop2:left-[10.2vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      <div className="absolute top-0 mobile2:left-[7vw] laptop2:left-[9vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      <div className="absolute top-0 mobile2:right-[10vw] laptop2:right-[10.2vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      <div className="absolute top-0 mobile2:right-[7vw] laptop2:right-[9vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt="" 
      className="mt-6 mobile2:w-[45vw] laptop2:w-[19vw]"/>
      <div className="posua mobile2:text-[5vh] laptop2:text-[8.5vh] text-[#CB2229] mobile2:mt-3 ">EVENTS</div>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742846355/4_1_rrv4py.png" alt="" 
      className="absolute mobile2:-left-[26.5vw] laptop2:-left-[11.5vw] mobile2:-top-10 laptop2:-top-7 mobile2:h-[40vh] laptop2:h-[78vh] z-50"/>
      
      <div className="relative w-full mobile2:max-w-[77%] laptop2:max-w-[78.5%] mobile2:h-[70vh] laptop2:h-[80vh] mb-10 mt-4">
        <Swiper
        ref={swiperRef}
          modules={[Navigation ,Autoplay]}
          direction="vertical"
          slidesPerView={1}
          loop={true}
          navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ transitionTimingFunction: "ease-in" }}
          speed={1000}
          className="w-full h-full"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.imgSrc} alt={`Slide ${slide.id}`} className="w-full h-full object-cover" />
              <div className="absolute mobile2:bottom-0 laptop2:top-0 mobile2:w-full laptop2:w-[40%] mobile2:h-[60%] laptop2:h-full backdrop-blur-lg z-30 mobile2:rounded-t-2xl laptop2:rounded-r-2xl text-white flex flex-col items-center justify-center">
        <div className="hidden laptop2:block laptop2:w-[2px] laptop2:h-[95%] laptop2:top-[50%] laptop2:-translate-y-[50%] laptop2:right-0 laptop2:bg-gradient-to-b from-transparent to-transparent via-gray-200 absolute z-40"></div>
        <div className="laptop2:hidden mobile2:h-[2px] mobile2:w-[90%] mobile2:top-0 mobile2:left-[50%] mobile2:-translate-x-[50%] mobile2:bg-gradient-to-r from-transparent to-transparent via-gray-200 absolute z-40"></div>
        <h1 className="posua mobile2:text-3xl laptop2:text-6xl">{slide.head}</h1>
        <p className="mobile2:w-[90%] laptop2:w-[80%] mt-4 gotham mobile2:text-[1.7vh] laptop2:text-lg">{slide.message}</p>
        </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile ? (
          <>
        <div ref={prevRef} className="absolute laptop2:top-[50%] laptop2:-translate-y-[90%] laptop2:right-0 rounded-full p-2 cursor-pointer z-50">
          <LiaChevronCircleUpSolid className="text-white laptop2:text-8xl opacity-50 hover:opacity-80" />
        </div>
        <div ref={nextRef} className="absolute laptop2:top-[50%] laptop2:-translate-y-[10%] laptop2:right-0 rounded-full p-2 cursor-pointer z-50">
          <LiaChevronCircleDownSolid className="text-white laptop2:text-8xl opacity-50 hover:opacity-80" />
        </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742911572/6_1_2_w8dl7t.png" alt="" 
          className="absolute hidden laptop2:block -left-9 -bottom-8 z-40 h-66 t"/>
          </>
        ) : (
          <>
        <div ref={prevRef} className="absolute mobile2:bottom-0 mobile2:left-[50%] mobile2:-translate-x-[90%] rounded-full p-2 cursor-pointer z-50">
          <LiaChevronCircleUpSolid className="text-white mobile2:text-6xl opacity-50 hover:opacity-80" />
        </div>
        <div ref={nextRef} className="absolute mobile2:bottom-0 mobile2:left-[50%] mobile2:-translate-x-[10%] rounded-full p-2 cursor-pointer z-50">
          <LiaChevronCircleDownSolid className="text-white mobile2:text-6xl opacity-50 hover:opacity-80" />
        </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742911572/6_1_2_w8dl7t.png" alt="" 
          className="absolute laptop2:hidden scale-x-[-1] -right-7 -bottom-6 z-40 h-40 t"/>
          </>)}
      </div>
      </div>
  );
};

export {Events}
