import SectionHeading from "../../Components/SectionHeading";

function AboutUs() {
  return (
    <div className="relative w-full min-h-140 md:h-159 py-15 px-3 md:px-0">
      <div className="relative flex flex-col md:flex-row justify-between md:justify-start w-full h-full bg-[url('http://res.cloudinary.com/dqobuxkcj/image/upload/v1742755261/c8msuldq9pe6p0adn6mh.webp')] bg-[top_left_42%] bg-cover md:bg-center  shadow-xl rounded-xl">
        <div className="absolute top-[-1.8rem] md:top-[-2.5rem] left-[-1.8rem] md:left-[-2.5rem] w-45 h-45 md:w-70 md:h-70 z-20">
          <img
            src="http://res.cloudinary.com/dqobuxkcj/image/upload/v1742755422/xmwxibcv8hi2mnfxujvc.webp"
            alt=""
          />
        </div>
        <div className="md:hidden">
          <SectionHeading title="About us" />
        </div>
        <div className="min-h-[50%] py-4 ms:py-0 md:h-full w-full md:w-112 backdrop-blur-xl rounded-xl md:rounded-r-2xl md:border-r-3 border-white overflow-hidden">
          <div className="hidden md:block">
            <SectionHeading title="About us" />
          </div>
          <p className="alexBrush-font text-[#550E11] md:py-2 text-2xl md:text-5xl px-3 md:px-9 text-center leading-5 mt-5">
            P
            <span className="gotham-font  text-[#550E11] text-sm md:text-xl leading-0">
              osua, the whisper of spring that breathes life into our land,
              <br /> a melody carried by the winds of tradition. It binds us in
              the warmth of brotherhood, painting the air with the hues of our
              heritage.
              <br /> A tribute to our roots, a celebration of identity—Posua is
              where culture finds its voice.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
