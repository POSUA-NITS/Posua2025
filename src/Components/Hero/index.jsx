import { ArrowDown } from "lucide-react";
import RedBorder from "../RedBorder";
import { useState } from "react";
import { useEffect } from "react";

function Hero() {
  const [stopGif, setStopGif] = useState(false);

  function handleScroll() {
    const element = document.getElementById("about-us");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  function startGif() {
    setInterval(() => {
      setStopGif(true);
    }, 3000);
  }

  useEffect(() => {
    startGif();
  }, []);

  return (
    <div className="hidden md:block relative w-full h-screen overflow-hidden">
      <div className="absolute bg-linear-to-b from-[#53b8f7] to-[#f9f9f9] w-full h-[50%]"></div>
      <div className="absolute w-[55rem] h-[35rem] right-0 bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841328/cloud5_po3haf.webp')] bg-cover move-clouds"></div>
      <div className="absolute w-[15rem] h-[15rem] left-70 top-35 bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/Sun_mtqiuk.webp')] bg-cover"></div>
      <div className="absolute bottom-[-5rem] w-full h-[95%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841325/hill1_fo5sns.webp')] bg-cover "></div>
      <div className="absolute bottom-0 left-[-2rem] w-[50%] h-[50%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841316/hill2_xklzci.webp')] bg-cover"></div>
      <div className="absolute w-[40rem] h-[30rem] right-[-15rem] top-[8rem] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841327/cloud4_wn8rzx.webp')] bg-cover move-clouds"></div>
      <div className="absolute bottom-0 w-full h-[70%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841317/hill3_lwnmht.webp')] bg-cover"></div>
      <div className="absolute bottom-0 right-0 w-[40%] h-[55%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841316/hill4_px9slp.webp')] bg-cover"></div>
      <div className="absolute w-[40rem] h-[25rem] right-[-16rem] bottom-0 bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841238/cloud2_fl2xl3.webp')] bg-cover move-clouds"></div>
      <div className="absolute w-[60rem] h-[30rem] left-[-10rem] top-[17rem]  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841326/cloud3_ghoxim.webp')] bg-cover move-clouds"></div>
      <div className="absolute bottom-[-1rem] w-full h-[40%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841316/hill5_xiphpy.webp')] bg-cover bg-no-repeat"></div>
      <div className="absolute w-[60rem] h-[25rem] right-[-9rem] bottom-[-12rem] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841332/daor_ur3zqp.webp')] bg-cover move-clouds"></div>
      <div className="absolute bottom-0 left-[-13rem] w-[70%] h-[28%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841639/hill6_ae8fcl.webp')] bg-cover bg-no-repeat"></div>
      <div className="absolute w-[26rem] h-[25rem] left-[-1rem] bottom-6  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841695/gos_abueux.gif')] bg-cover"></div>
      <div className="absolute w-[4rem] h-[4rem] left-[11rem] bottom-8  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841698/grass_xksiyu.gif')] bg-cover"></div>
      <div className="absolute w-[10rem] h-[10rem] left-[5rem] bottom-3  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841707/nasoni_twyoef.gif')] bg-cover"></div>
      <div className="absolute w-[10rem] h-[10.5rem] left-[21rem] bottom-1  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841695/dhulia_kgdzp7.gif')] bg-cover"></div>
      <div className="absolute w-[10rem] h-[10.5rem] left-[10rem] bottom-2  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841698/pepua_coqk9f.gif')] bg-cover"></div>
      <div className="absolute w-[10rem] h-[10.5rem] left-[16rem] bottom-3  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841696/nasoni2_eikwz3.gif')] bg-cover"></div>

      <div className="w-full h-full absolute top-[43%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2">
        <div className="w-[32%]  h-[13rem] px-[1rem]  flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/%E0%A6%AA%E0%A6%9B%E0%A7%8B%E0%A7%B1%E0%A6%BE_bmpyok.webp"
            alt=""
            className="bg-cover"
          />
          {!stopGif && (
            <img
              src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841699/posua_eoalhx.gif"
              alt=""
              className="absolute w-[31%]"
            />
          )}
        </div>
        <div className=" w-[32%] h-[3.5rem] relative ">
          <div className="bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/text1_nwlvi9.webp')] bg-cover h-[1.8rem] w-[55%] absolute left-0 top-0"></div>
          <div className="bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/text2_rcprtv.webp')] bg-cover h-[1.8rem] w-[55%] absolute right-0 bottom-0"></div>
        </div>
      </div>

      <div className="w-[25rem] h-[7rem] absolute bottom-20 right-[11%] flex justify-between items-center space-x-2">
        <div className="border-3 h-full w-[38%] border-red-900 rounded-lg backdrop-blur-lg flex flex-col justify-center items-end space-y-2 px-3">
          <img
            src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841238/%E0%A7%A8%E0%A7%A8_%E0%A6%9A_%E0%A6%A4_iakcdw.webp"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841153/5th_April_y9hotu.webp"
            alt=""
          />
        </div>
        <div className="border-3 h-full w-[62%] border-red-900 rounded-lg backdrop-blur-lg flex flex-col justify-center items-end px-3">
          <p className="text-white text-end leading-4">
            A vibrant celebration of Assam’s rich culture, traditions, and
            heritage, set against the blooming beauty of spring.
          </p>
        </div>
      </div>
      <div
        className="z-100 h-20 w-20 rounded-full border-3 border-red-900 absolute bottom-[-4%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleScroll}
      >
        <ArrowDown className="w-12 h-20 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-red-900" />
      </div>
      <div className="w-4 md:w-6 absolute h-full left-6% md:left-[9%]">
        <RedBorder />
      </div>
      <div className="w-4 md:w-6 absolute h-full right-6% md:right-[9%]">
        <RedBorder />
      </div>
      <div className=" bg-[url('/Heroimages/Leaves.gi')] w-full h-full absolute left-0 right-0 top-0 flex justify-center items-center"></div>
    </div>
  );
}

export default Hero;
