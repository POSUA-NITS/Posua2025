import SectionHeading from "../SectionHeading";
import data from "../../assets/Editions.json";

function Borhomthuri() {
  return (
    <section className="w-full h-full md:h-[42rem] relative flex flex-col md:flex-row justify-center items-center mt-16 py-5">
      <div className="absolute left-0 top-[-2rem] md:top-0 w-[10rem] md:w-[15rem]">
        <img
          src="http://res.cloudinary.com/dqobuxkcj/image/upload/v1742756185/qoa3oyijxnbd2rgtiioy.webp"
          alt=""
        />
      </div>
      <div className="hidden md:block absolute right-[-0.6rem] top-0 w-[15rem]">
        <img
          src="http://res.cloudinary.com/dqobuxkcj/image/upload/v1742756249/jsbieymskdohbl3s2bdx.webp"
          alt=""
        />
      </div>
      <div className="w-full md:w-[45%] md:h-[38rem] flex flex-col justify-start items-center">
        <div className="flex flex-col items-center">
          <SectionHeading title="Borhomthuri" />
          <h1 className="text-3xl font-semibold text-green-700">2025</h1>
        </div>
        <p className="alexBrush-font text-[#550E11] py-4 md:py-2 text-2xl md:text-5xl px-4 md:px-8 lg:px-8 text-center leading-5  mt-6">
          B
          <span className="gotham-font  text-[#550E11] text-sm md:text-2xl leading-0 ">
            orhomthuri captures the essence of tradition, creativity, and
            celebration. From insightful articles and artistic expressions to
            memories frozen in time, this edition showcases the vibrancy of our
            fest. A keepsake of heritage, stories, and shared moments-relive the
            magic!
          </span>
        </p>
      </div>
      <div className="w-full md:w-[55%]  md:mt-0 flex flex-col md:flex-row justify-between items-center h-[16.3rem] sm:h-[26rem] md:h-[20rem]">
        <a href="https://drive.google.com/file/d/15co-znUM7VGd8ThQDFyNO1mVMYbfxOAR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative h-[100%] md:h-[43rem] w-full md:mb-15 flex justify-center items-center bg-[url('http://res.cloudinary.com/dqobuxkcj/image/upload/v1742756307/holrium3wqkexu9xtr2p.webp')] bg-contain bg-center bg-no-repeat"></a>

        <div className="hidden h-[28rem] w-[32%]  mr-3 md:flex flex-col justify-center items-center overflow-hidden">
          <h1 className="gotham-font  text-[#550E11] text-lg">
            Previous Editions
          </h1>
          <div className="scroll-container h-full w-full">
            <div className="scroll-content w-full">
              {data.map((item, index) => (
                <a
                  href={item.link}
                  rel="noopener"
                  target="_blank"
                  style={{ margin: "1rem 0" }}
                  key={index}
                >
                  <img src={item.src} alt="magazine" />
                  <img
                    src={item.edition_num}
                    alt="Edition"
                    style={{
                      margin: "0 auto",
                      padding: ".5rem",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Borhomthuri;
