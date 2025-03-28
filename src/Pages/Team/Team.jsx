import React from "react";

const union = [
  { id: 1, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "John Doe" },
  { id: 2, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "John Doe" },
  { id: 3, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "John Doe" },
  { id: 4, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "John Doe" },
  { id: 5, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "John Doe" },
  { id: 6, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "John Doe" },
];

const Team = () => {
  return (
    <div className="bg-[#F8EAD0] min-h-screen w-full max-w-screen flex flex-col items-center text-center relative pt-[12vh] overflow-hidden ">
      {/* Side and Top Lines */}
      <div className="absolute top-0 mobile2:left-[10vw] laptop2:left-[10.2vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      <div className="absolute top-0 mobile2:left-[7vw] laptop2:left-[9vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      <div className="absolute top-0 mobile2:right-[10vw] laptop2:right-[10.2vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      <div className="absolute top-0 mobile2:right-[7vw] laptop2:right-[9vw] w-[7px] h-full bg-[#DC6B70] opacity-50"></div>
      
      {/* Header Section */}
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt="" 
      className="mt-6 laptop2:w-[360px] mobile2:w-[200px]"/>
      <div className="posua mobile2:text-[4vh] laptop2:text-[10vh] text-[#CB2229]">TEAM POSUA</div>
      <p className="gotham mobile2:text-[2vh] laptop2:text-[3.5vh] mobile2:leading-5 laptop2:leading-8 text-black w-[70%]  mt-4 px-2 z-10">
      With the arrival of spring and the departure of winter days, our Mother Nature expresses her joy of welcoming the calming rejuvenation via greenery and brightness all around her. Our Spring Fest, Posua is that venture which nurtures this celebration. This spree witnesses everyone coming together to work as a team, be it the students, the faculty members and the entire fraternity of NIT Silchar into its circle of gaiety and also ensures of breaking all the barriers among the crowd and bringing everyone together.
      </p>

      {/* Image Section */}
      <div className="mobile2:mt-16 laptop2:mt-8">
        <img
          src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742818069/kamakhya_meuhvd.png"
          alt="Posua Background"
          className="hidden laptop2:block absolute left-50% -translate-x-[50%] opacity-35 w-[45vw] top-[430px]"
        />
      </div>
      
      {/* Team Section */}
      <div className="mt-10 flex justify-center items-center gap-x-[20vw] flex-wrap w-[80%]">
        <div className="relative text-center group z-10 bg-[url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743189245/hobo_japi_ymvf2t.png')] bg-cover bg-center h-auto aspect-square w-[19.5vw] flex justify-center items-center">
          <div className="w-[18.6vw] h-auto aspect-square bg-white rounded-full flex items-center justify-center shadow-md z-10 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"></div>
          <div className="absolute top-[16vw] w-[16vw] h-[4.6vw] posua mobile2:text-[1.3vh] laptop2:text-[3.6vh] bg-[#721B1E] text-white py-2.5 laptop2:py-4 px-4 rounded-full z-20 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
          <h1 className="group-hover:-translate-y-3 transition-transform duration-300">
              John Doe
              </h1>
              <h1 className="posua text-white opacity-0 absolute bottom-1 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">Head</h1>
          </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742828414/1_81_gj3nn0.png" alt="" 
          className="absolute top-[50%] -left-[3rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"/>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742829354/1_82_ujxqrd.png" alt="" 
          className="absolute top-[50%] -right-[3.1rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"/>
        </div>
        <div className="relative text-center group z-10 bg-[url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743189245/hobo_japi_ymvf2t.png')] bg-cover bg-center h-auto aspect-square w-[19.5vw] flex justify-center items-center">
          <div className="w-[18.6vw] h-auto aspect-square bg-white rounded-full flex items-center justify-center shadow-md z-10 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"></div>
          <div className="absolute top-[16vw] w-[16vw] h-[4.6vw] posua mobile2:text-[1.3vh] laptop2:text-[3.6vh] bg-[#721B1E] text-white py-2.5 laptop2:py-4 px-4 rounded-full z-20 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
          <h1 className="group-hover:-translate-y-3 transition-transform duration-300">
              John Doe
              </h1>
              <h1 className="posua text-white opacity-0 absolute bottom-1 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">Head</h1>
          </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742828414/1_81_gj3nn0.png" alt="" 
          className="absolute top-[50%] -left-[3rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"/>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742829354/1_82_ujxqrd.png" alt="" 
          className="absolute top-[50%] -right-[3.1rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"/>
        </div>
        <div className=" relative text-center group z-30 bg-[url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743189245/hobo_japi_ymvf2t.png')]  bg-cover bg-center h-auto aspect-square w-[19.5vw] flex justify-center items-center">
        <div className="w-[18.6vw] h-auto aspect-square bg-white rounded-full flex items-center justify-center shadow-md z-10 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"></div>
          <div className="absolute top-[16vw] w-[16vw] h-[4.6vw] posua mobile2:text-[1.3vh] laptop2:text-[3.6vh] bg-[#721B1E] text-white py-2.5 laptop2:py-4 px-4 rounded-full z-20 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
          <h1 className="group-hover:-translate-y-3 transition-transform duration-300">
              John Doe
              </h1>
              <h1 className="posua text-white opacity-0 absolute bottom-1 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">Head</h1>
          </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742828414/1_81_gj3nn0.png" alt="" 
          className="absolute top-[50%] -left-[3rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"/>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742829354/1_82_ujxqrd.png" alt="" 
          className="absolute top-[50%] -right-[3.1rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300"/>
        </div>
      </div>

      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt="" 
      className=" laptop2:w-[360px] mobile2:w-[200px] hidden laptop2:block mt-[20vh]"/>
      <div className="flex mobile2:mt-40 laptop2:mt-0">
        <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 z-10"/>
      <div className="posua mobile2:text-[3vh] laptop2:text-[10vh] text-[#CB2229]">UNION BODY</div>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 scale-x-[-1] z-10"/>
      </div>
      <div className="flex mobile2:w-[78%] tablet2:w-[90%] tablet2:gap-x-[1.8vw] laptop2:w-[78%] flex-wrap laptop2:gap-x-30 z-30 justify-center">
        {union.map((image) => (
          <div key={image.id} className="relative bg-transparent">
            {/* Bamboo Frame */}
            <div className="relative p-4 mobile2:mx-4 laptop2:mx-0 group scale-75 laptop2:scale-100" >
              <div className="relative border-30 border-[#721B1E] bg-white z-10">
                <img src={image.src} alt={image.name} className="w-56 h-72 object-cover z-30" />
              </div>
              <div className="posua relative text-white text-center py-2 text-3xl z-40 -translate-y-6 group-hover:-translate-y-10 transition-transform duration-300">
                {image.name}
              </div>
              <h1 className="posua text-white opacity-0 absolute bottom-9 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">Head</h1>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837716/5_2_xosmnn.png" alt="" 
              className="absolute h-[58vh] -top-[13%] -left-[9.5vh] z-20"/>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742838523/5_3_mazixq.png" alt="" 
              className="absolute h-[58vh] -top-[13%] -right-[9.9vh] z-20"/>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742839250/woood-removebg-preview_1_2_zyapin.png" alt="" 
              className="absolute bottom-0 w-[90%] z-30"/>
            </div>
          </div>
        ))}
      </div>
      {/* Core Team */}
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt="" 
      className="laptop2:w-[360px] mobile2:w-[200px] hidden laptop2:block mt-40"/>
      <div className="flex mobile2:mt-10 laptop2:mt-0">
        <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 z-10"/>
      <div className="posua mobile2:text-[3vh] laptop2:text-[10vh] text-[#CB2229]">CORE TEAM</div>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 scale-x-[-1] z-10"/>
      </div>
      <div className="flex mobile2:w-[78%] tablet2:w-[90%] tablet2:gap-x-[1.8vw] laptop2:w-[78%] flex-wrap laptop2:gap-x-30 z-30 justify-center">
        {union.map((image) => (
          <div key={image.id} className="relative bg-transparent">
            {/* Bamboo Frame */}
            <div className="relative p-4 mobile2:mx-4 laptop2:mx-0 group scale-75 laptop2:scale-100" >
              <div className="relative border-30 border-[#721B1E] bg-white z-10">
                <img src={image.src} alt={image.name} className="w-56 h-72 object-cover z-30" />
              </div>
              <div className="posua relative text-white text-center py-2 text-3xl z-40 -translate-y-6 group-hover:-translate-y-10 transition-transform duration-300">
                {image.name}
              </div>
              <h1 className="posua text-white opacity-0 absolute bottom-9 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">Head</h1>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837716/5_2_xosmnn.png" alt="" 
              className="absolute h-[58vh] -top-[13%] -left-[9.5vh] z-20"/>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742838523/5_3_mazixq.png" alt="" 
              className="absolute h-[58vh] -top-[13%] -right-[9.9vh] z-20"/>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742839250/woood-removebg-preview_1_2_zyapin.png" alt="" 
              className="absolute bottom-0 w-[90%] z-30"/>
            </div>
          </div>
        ))}
      </div>
      {/* Tech Team */}
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt="" 
      className="laptop2:w-[360px] mobile2:w-[200px] hidden laptop2:block mt-40"/>
      <div className="flex mobile2:mt-10 laptop2:mt-0">
        <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 z-10"/>
      <div className="posua mobile2:text-[3vh] laptop2:text-[10vh] text-[#CB2229]">TECH TEAM</div>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 scale-x-[-1] z-10"/>
      </div>
      <div className="flex mobile2:w-[78%] tablet2:w-[90%] tablet2:gap-x-[1.8vw] laptop2:w-[78%] flex-wrap laptop2:gap-x-30 z-30 justify-center">
        {union.map((image) => (
          <div key={image.id} className="relative bg-transparent">
            {/* Bamboo Frame */}
            <div className="relative p-4 mobile2:mx-4 laptop2:mx-0 group scale-75 laptop2:scale-100" >
              <div className="relative border-30 border-[#721B1E] bg-white z-10">
                <img src={image.src} alt={image.name} className="w-56 h-72 object-cover z-30" />
              </div>
              <div className="posua relative text-white text-center py-2 text-3xl z-40 -translate-y-6 group-hover:-translate-y-10 transition-transform duration-300">
                {image.name}
              </div>
              <h1 className="posua text-white opacity-0 absolute bottom-9 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">Head</h1>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837716/5_2_xosmnn.png" alt="" 
              className="absolute h-[58vh] -top-[13%] -left-[9.5vh] z-20"/>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742838523/5_3_mazixq.png" alt="" 
              className="absolute h-[58vh] -top-[13%] -right-[9.9vh] z-20"/>
              <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742839250/woood-removebg-preview_1_2_zyapin.png" alt="" 
              className="absolute bottom-0 w-[90%] z-30"/>
            </div>
          </div>
        ))}
      </div>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742840770/Clip_path_group_1_kshpf4.png" alt="" 
      className="absolute top-[11vh] mobile2:-left-[42vw] laptop2:-left-[24vw] h-[60vh] laptop2:h-[91vh]"/>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742842825/8805-removebg-preview_2_hunca8.png" alt="" 
      className="absolute mobile2:top-[8%] laptop2:top-[26.5%] -left-[25vw] laptop2:-left-[15vw] mobile2:h-[40vh] laptop2:h-[90vh]"/>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742842825/8805-removebg-preview_2_hunca8.png" alt="" 
      className="absolute mobile2:top-[10.5%] laptop2:top-[36%] -right-[40vw] laptop2::-right-[15vw] mobile2:h-[50vh] laptop2:h-[120vh] scale-x-[-1]"/>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742843722/coral-removebg-preview_3_ls7bla.png" alt="" 
      className="absolute mobile2:top-[94%] -rotate-25 laptop2:top-[70%] mobile2:-left-[45vw] opacity-70 laptop2:-left-[18vw] mobile2:h-[70vh] laptop2:h-[150vh]"/>
    </div>
  );
};

export {Team}
