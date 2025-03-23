import Borhomthuri from "../../Components/Borhomthuri";
import BorhomthuriGallery from "../../Components/Borhomthuri-gallery";
import RedBorder from "../../components/RedBorder";
import AboutUs from "../About";
import Invitation from "../Invitation";

function Home() {
  return (
    <section className="bg-[#f8ead0] min-h-screen w-full flex justify-between px-[6%] md:px-[9%] relative">
      <div className="w-4 md:w-6">
        <RedBorder />
      </div>
      <section className="w-full flex flex-col justify-between items-center">
        <AboutUs />
        <div className="absolute left-[-2rem] md:left-0 top-130 md:top-95  overflow-hidden w-[20rem] md:w-[40rem]">
          <img src="/HomeImages/flower 1.png" alt="" />
        </div>
        <Invitation />
        <div className="absolute right-0 top-185  z-0 w-[24rem] md:w-[50rem]">
          <img src="/HomeImages/mukha 1.png" alt="" />
        </div>
        <div className="absolute left-0 top-325  overflow-hidden w-[14rem] md:w-[30rem]">
          <img src="/HomeImages/japi3 1.png" alt="" />
        </div>
        <Borhomthuri />
        <BorhomthuriGallery />
      </section>
      <div className="w-4 md:w-6">
        <RedBorder />
      </div>
    </section>
  );
}

export default Home;
