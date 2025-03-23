function SectionHeading({ title }) {
  return (
    <div className=" flex justify-center items-center mt-4 md:mt-8 z-10">
      <div className="flex flex-col justify-center items-center md:space-y-3">
        <img
          src="/HomeImages/frame1-removebg-preview 2.png"
          alt="Frame"
          className="w-38 md:w-70"
        />
        <h1 className="moglan-font text-[#550E11] text-4xl md:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default SectionHeading;
