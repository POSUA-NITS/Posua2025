import data from "../../assets/Editions.json";
function BorhomthuriGallery() {
  return (
    <div className="md:hidden  w-[full]  mr-3 flex flex-col justify-center items-center">
      <h1 className="alexBrush-font  text-[#550E11] text-4xl">
        P
        <span className="gotham-font  text-[#550E11] text-lg">
          revious Editions
        </span>
      </h1>
      <div className="scroll-container h-50 w-50 overflow:hidden">
        <div className="scroll-content-horizontal h-[2rem] w-600 flex gap-3">
          {data.map((item, index) => (
            <a
              href={item.link}
              rel="noopener"
              target="_blank"
              style={{ margin: "1rem 0" }}
              key={index}
            >
              <img src={item.src} alt="magazine" className="bg-cover w-26" />
              <img
                src={item.edition_num}
                alt="Edition"
                style={{
                  margin: "0 auto",
                  padding: ".5rem",
                }}
                className="bg-cover w-26"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BorhomthuriGallery;
