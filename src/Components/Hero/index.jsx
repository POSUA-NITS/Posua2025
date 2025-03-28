import { ArrowDown } from "lucide-react";
import RedBorder from "../RedBorder";
import { useState } from "react";
import { useEffect } from "react";

function Hero() {
  const [stopGif, setStopGif] = useState(true);
  const [stopAnimation, setStopAnimation] = useState(false);

  function handleScroll() {
    const element = document.getElementById("about-us");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  function startGif() {
    setTimeout(() => {
      setStopGif(true);
    }, 3200);
  }

  useEffect(() => {
    setTimeout(() => {
      setStopGif(false);
      setStopAnimation(true);
      startGif();
    }, 2600);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!stopAnimation && (
        <div className="w-full h-screen absolute z-1000">
          <div className="w-full h-full absolute right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914346/1_qwyup9.webp')] animate-[topRight_3s_ease-in-out_forwards] "></div>
          <div className="w-full h-full absolute left-0 top-0 right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914345/2_m7k0ic.webp')] animate-[top_3s_ease-in-out_forwards]"></div>
          <div className="w-full h-full absolute left-0 top-0 right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914345/3_uiqehz.webp')] animate-[right_3s_ease-in-out_forwards]"></div>
          <div className="w-[70%] h-full absolute right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914345/4_xusz8v.webp')] animate-[right_3s_ease-in-out_forwards]"></div>
          <div className="w-full h-full absolute left-0 right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914345/5_haotid.webp')] animate-[top_3s_ease-in-out_forwards]  md:animate-[topLeft_3s_ease-in-out_forwards]"></div>
          <div className="w-full h-full absolute left-0 right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914345/6_mrzniy.webp')] animate-[bottom_3s_ease-in-out_forwards]"></div>
          <div className="w-full md:w-[100%] lg:w-[60%] h-full absolute left-0 right-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914346/7_i1a56b.webp')] animate-[bottom_3s_ease-in-out_forwards] md:animate-[bottomLeft_3s_ease-in-out_forwards]"></div>
          <div className="w-[65rem] md:w-[100%] lg:w-[60%] h-[90%] absolute left-0 bg-cover bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742914346/8_no4cmw.webp')] animate-[left_3s_ease-in-out_forwards]"></div>
        </div>
      )}
      <div className="absolute bg-linear-to-b from-[#53b8f7] to-[#f9f9f9] w-full h-[30%] md:h-[50%]"></div>
      <div className="absolute w-[55rem] h-[35rem] right-0 bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841328/cloud5_po3haf.webp')] bg-cover move-clouds"></div>
      <div className="absolute w-[8rem] h-[8rem] md:w-[15rem] md:h-[15rem] left-15 top-20 md:left-70 md:top-35 bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/Sun_mtqiuk.webp')] bg-cover"></div>
      <div className="absolute bottom-[-3rem] md:bottom-[-5rem] w-full h-[95%] bg-center bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841325/hill1_fo5sns.webp')] bg-cover "></div>
      <div className="absolute bottom-0 left-[-2rem] w-[50%] h-[50%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841316/hill2_xklzci.webp')] bg-cover"></div>
      <div className="absolute w-[40rem] h-[30rem] right-[-15rem] top-[8rem] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841327/cloud4_wn8rzx.webp')] bg-cover move-clouds"></div>
      <div className="absolute bottom-[-4rem] bg-center md:left-0 w-full h-[86%] md:h-[79%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841317/hill3_lwnmht.webp')] bg-cover"></div>
      <div className="absolute bottom-[-5rem] right-0 w-[40%] h-full md:h-[68%] bg-center bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841316/hill4_px9slp.webp')] bg-cover"></div>
      <div className="absolute w-[40rem] h-[25rem] right-[-16rem] bottom-0 bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841238/cloud2_fl2xl3.webp')] bg-cover move-clouds"></div>
      <div className="absolute w-[60rem] h-[30rem] left-[-10rem] top-[17rem]  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841326/cloud3_ghoxim.webp')] bg-cover move-clouds"></div>
      <div className="absolute bottom-[-1rem]  w-full h-[42%] md:h-[40%] bg-center bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841316/hill5_xiphpy.webp')] bg-cover bg-no-repeat"></div>
      <div className="absolute w-[60rem] h-[25rem] right-[-9rem] bottom-[-12rem] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841332/daor_ur3zqp.webp')] bg-cover move-clouds"></div>

      <div className="absolute bottom-0 left-0 md:left-[-13rem] w-full md:w-[80%] h-[27%] md:h-[28%] bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841639/hill6_ae8fcl.webp')] bg-cover bg-no-repeat"></div>
      <div className="absolute w-[15rem] h-[14rem] md:w-[26rem] md:h-[25rem] left-0 md:left-[-1rem] bottom-12 md:bottom-6  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841695/gos_abueux.gif')] bg-cover"></div>
      <div className="absolute hidden md:block w-[4rem] h-[4rem] left-[11rem] bottom-8  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841698/grass_xksiyu.gif')] bg-cover"></div>
      <div className="absolute w-[5rem] h-[6rem] md:w-[10rem] md:h-[10rem] left-[5rem] bottom-6 md:bottom-3  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841707/nasoni_twyoef.gif')] bg-cover"></div>
      <div className="absolute w-[5rem] h-[6rem] md:w-[10rem] md:h-[10.5rem] left-[14rem] md:left-[21rem] bottom-1  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841695/dhulia_kgdzp7.gif')] bg-cover"></div>
      <div className="absolute w-[5rem] h-[6rem] md:w-[10rem] md:h-[10.5rem] left-[8rem] md:left-[10rem] bottom-2  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841698/pepua_coqk9f.gif')] bg-cover"></div>
      <div className="absolute w-[5rem] h-[6rem] md:w-[10rem] md:h-[10.5rem] left-[11.5rem] md:left-[16rem] bottom-3  bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841696/nasoni2_eikwz3.gif')] bg-cover"></div>

      <div className="w-full h-full absolute top-[41%] left-[53%] md:left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2">
        <div className="w-[100%] md:w-[50%] h-[7rem]  md:h-[13rem] px-[1rem]  flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/%E0%A6%AA%E0%A6%9B%E0%A7%8B%E0%A7%B1%E0%A6%BE_bmpyok.webp"
            alt=""
            className="bg-cover h-full"
          />
          {!stopGif && (
            <img
              src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841699/posua_eoalhx.gif"
              alt=""
              className="absolute w-[80%] md:w-[31%] hidden md:block"
            />
          )}
        </div>
        <div className="w-[10rem] md:w-[31rem] h-[2.5rem] md:h-[3.5rem] relative ">
          <div className="bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/text1_nwlvi9.webp')] bg-cover h-[1.05rem] md:h-[1.8rem] w-[100%] md:w-[55%] absolute left-[-3rem] md:left-0 top-0"></div>
          <div className="bg-[url('https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841315/text2_rcprtv.webp')] bg-cover h-[1.05rem] md:h-[1.8rem] w-[100%] md:w-[55%] absolute right-[3rem] md:right-0 bottom-0"></div>
        </div>
      </div>

      <div className="w-[14rem] md:w-[25rem] h-[9rem] md:h-[7rem] absolute bottom-40 md:bottom-20 right-[11%] flex flex-col md:flex-row space-y-1  justify-between items-end md:items-center md:space-x-2">
        <div className="border-2 md:border-3 h-[80%] w-[38%] border-red-900 rounded-lg backdrop-blur-lg flex flex-col justify-center items-end space-y-2 px-3">
          <img
            src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841238/%E0%A7%A8%E0%A7%A8_%E0%A6%9A_%E0%A6%A4_iakcdw.webp"
            alt=""
            className="w-[100%]"
          />
          <img
            src="https://res.cloudinary.com/dqobuxkcj/image/upload/v1742841153/5th_April_y9hotu.webp"
            alt=""
            className="w-[90%]"
          />
        </div>
        <div className="border-2 md:border-3 h-full w-[62%] border-red-900 rounded-lg backdrop-blur-lg flex flex-col justify-center items-end px-3">
          <p className="text-white leading-2.5 md:leading-4 text-end text-[11px] md:text-lg">
            A vibrant celebration of Assam’s rich culture, traditions, and
            heritage, set against the blooming beauty of spring.
          </p>
        </div>
      </div>
      <div
        className="hidden md:block z-100 h-20 w-20 rounded-full border-3 border-red-900 absolute bottom-[-4%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleScroll}
      >
        <ArrowDown className="w-12 h-20 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-red-900" />
      </div>

      <div className=" bg-[url('/Heroimages/Leaves.gi')] w-full h-full absolute left-0 right-0 top-0 flex justify-center items-center"></div>
    </div>
  );
}

export default Hero;
