import { useState } from "react";
import Borhomthuri from "../../Components/Borhomthuri";
import BorhomthuriGallery from "../../Components/Borhomthuri-gallery";
import Hero from "../../Components/Hero";
import RedBorder from "../../Components/RedBorder";
import { AboutUs } from "../AboutUs";
import Invitation from "../Invitation";
import { Loading } from "../../Components/Loader/Loading";

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <section>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-[5000]">
          <Loading />
        </div>
      )}
      <section>
        <Hero setLoading={setLoading} />
        <section className="bg-[#f8ead0] min-h-screen w-full flex justify-between px-[6%] md:px-[9%] relative">
          <div className="w-4 md:w-6">
            <RedBorder />
          </div>
          <section className="w-full flex flex-col justify-between items-center">
            <AboutUs />
            <div className="absolute left-[-2rem] md:left-0 top-130 md:top-95  overflow-hidden w-[20rem] md:w-[40rem]">
              <img
                src="http://res.cloudinary.com/dqobuxkcj/image/upload/v1742755790/vw4vnyemtsujzgh1nzt0.webp"
                alt=""
              />
            </div>
            <Invitation />
            <div className="absolute right-0 top-185  z-0 w-[24rem] md:w-[50rem]">
              <img
                src="http://res.cloudinary.com/dqobuxkcj/image/upload/v1742756010/tpulfkvcwmpp4vplpghv.webp"
                alt=""
              />
            </div>
            <div className="absolute left-0 top-325  overflow-hidden w-[14rem] md:w-[30rem]">
              <img
                src="http://res.cloudinary.com/dqobuxkcj/image/upload/v1742756095/kyryz67wi5rpk6ddietj.webp"
                alt=""
              />
            </div>
            <Borhomthuri />
            <BorhomthuriGallery />
          </section>
          <div className="w-4 md:w-6">
            <RedBorder />
          </div>
        </section>
      </section>
    </section>
  );
}

export { Home };
