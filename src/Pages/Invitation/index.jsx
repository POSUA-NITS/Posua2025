import SectionHeading from "../../Components/SectionHeading";

function Invitation() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SectionHeading title="Invitation" />
      <div className="relative mt-5 w-[93%] md:w-[80%] lg:w-[90%] flex justify-center items-center  z-20">
        <div className="absolute top-[-1.5rem] right-[-1.5rem] md:top-[-2rem] md:right-[-2rem] w-50 h-50 md:w-70 md:h-70">
          <img src="/HomeImages/About-frame-right.png" alt="" />
        </div>
        <img
          src="/HomeImages/Invitation 2024 1 1.png"
          alt="Invitation"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Invitation;
