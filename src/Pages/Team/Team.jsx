import React from "react";
import SectionHeading from "../../Components/SectionHeading";


const main = [
  {
    category: "CORE TEAM",
    members: [
      { id: 1, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743686089/IMG-20250402-WA0095_-_EE_085__Gyan_q2ippw.jpg", name: "Gyan S. Hazarika", title: "Convenor" },
      { id: 2, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743685764/IMG_20250118_212516_-_ME_D_140_Kasturi_Priyadarshinee_Borah_ag0nng.jpg", name: "Kasturi P. Borah", title: "Chief Coordinatior" },
      { id: 3, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743685842/WhatsApp_Image_2025-04-02_at_10.34.29_PM_1_cuheto.jpg", name: "Sibashish Kachari", title: "Chief Coordinator"}
    ],
  },
  {
    category: "EXECUTIVE HEADS",
    members: [
        {id: 1, name: "Bedanta Dutta", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612769/IMG-20250222-WA0050_-_ECE_117_BEDANTA_DUTTA_ewaipx.webp"},
        {id: 2, name: "Srijon Bordoloi", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612769/IMG-20250315-WA0336_2_-_Posua_NIT_Silchar_fualz8.webp"},
        {id: 3, name: "Jaan Baishya", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612798/photo_-_ME_A_027_Jaan_Baishya_tb8s7x.webp"},
        {id: 4, name: "Mrinmoy Jyoti Nath", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612797/IMG_20250328_155125_1_-_CE_147_Mrinmoy_Jyoti_Nath_nuzomu.webp"},
        {id: 5, name: "Shreya Goswami", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612769/IMG_20250203_132358_998_-_EEB_093_Shreya_fzbwb5.webp"},
        {id: 6, name: "Hrishikesh Duarah", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612825/IMG-20241217-WA0008_-_CE025_Hrishikesh_Duarah_syexrz.webp"}
    ],
  },
  {
    category: "TECH TEAM",
    members: [
      { id: 1, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743684714/WhatsApp_Image_2025-04-02_at_10.34.26_PM_2_bigb1s.jpg", name: "Himangshu Sarma" },
      { id: 2, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "Pragya P. Deka", title: "Co-Head" },
      { id: 3, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "Satya ", title: "Co-Head" },
      { id: 4, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743687540/WhatsApp_Image_2025-04-03_at_6.38.38_PM_yfmo60.jpg", name: "Anirban Bora", title: "Developer" },
      { id: 5, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743687864/WhatsApp_Image_2025-03-18_at_12.11.39_AM_loe2lb_c_crop_ar_3_4_ppwblm.jpg", name: "Subrata Lodh", title: "Developer" },
      { id: 6, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "Priyanshu Kashyap", title: "Developer" },
      { id: 7, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742837110/Assamese_girl_2_ajw5m8.png", name: "Manash P. Goswami", title: "Developer" },
    ],
  },
  {
    category: "EVENT MANAGEMENT",
    members: [
        {id: 1, name: "Angkit", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612767/IMG_7372_-_CE052_Angkit_Deka_pbwd4c.webp"},
        {id: 2, name: "Rimlee Ghosh", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612799/IMG_20250328_200541_-_EE_020__Rimlee_Ghosh_yqrmyp.webp"},
        {id: 3, name: "Abhijit Das", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743614935/DSC_0080_Original_-_Abhijit_Das_ME_092_dqtiwz.jpg "},
        {id: 4, name: "Udipta Nath", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743614934/My_Image_1_-_CE129_Udipta_Nath_htomce.jpg "}
    ],
  },
  {
    category: "PUBLICITY TEAM",
    members: [
        {id: 1, name: "Aditi A. Khataniar", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743681724/WhatsApp_Image_2025-04-02_at_10.34.31_PM_1_rgyru3.webp"},
    {id: 2, name: "Hrishikesh Duarah", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743681435/IMG-20241217-WA0008_-_CE025_Hrishikesh_Duarah_fj69g7.jpg"},
    {id: 3, name: "Nishanta B. Dutta", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743681758/WhatsApp_Image_2025-04-02_at_10.34.26_PM_rduc8x.webp"}    ],
  },
  {
    category: "LOGISTICS TEAM",
    members: [
        {id: 1, name: "Mrinmoy Boro", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743681724/WhatsApp_Image_2025-04-02_at_10.34.31_PM_1_rgyru3.webp"},
    {id: 2, name: "Sayantan G. Borah", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743682456/WhatsApp_Image_2025-04-02_at_10.34.33_PM_inasyu.webp"},
    {id: 3, name: "Kritartha Sarma", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743682472/WhatsApp_Image_2025-04-02_at_10.34.27_PM_sggtmk.jpg"}    ],
  },
  {
    category: "CULTURAL RALLY",
    members: [
        {id: 1, name: "Swagat Sonowal", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612768/IMG-20240416-WA0173_2_-_CE017_Swagat_Sonowal_jfywoy.webp"},
        {id: 2, name: "Amrita Kashyap", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612768/IMG_20250323_185934_-_ECE_016_Amrita_Kashyap_ksd41s.webp"},
        {id: 3, name: "Karina Rani Ojah", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612797/IMG-20250328-WA0014_-_CE013_Karina_Rani_Ojah_ec5pt7.webp"},
        {id: 4, name: "HRISHIKESH DAS", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612803/IMG-20250309-WA0040_copy_1748x3109_-_ECE_062__Hrishikesh_Das_nognur.webp"},
        {id: 5, name: "Partha Pratim Das", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612862/IMG_1194_2_-_CE056_-_Partha_Pratim_Das_wxhwht.webp"}
    ],
  },
  {
    category: "INFRA TEAM",
    members: [
        {id: 1, name: "Himshekhar Das", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612769/IMG-20250328-WA0001_-_CE018_Himshekhar_Das_a4kmei.webp"},
    {id: 2, name: "Nilotpal Sarma", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612797/WhatsApp_Image_2025-03-28_at_1.29.09_PM_-_CE_086_Nilotpal_Sarma_teml4d.webp"},
    {id: 3, name: "Priyanuj Baruah", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612799/IMG-20241025-WA0059_1_-_CE067_Priyanuj_Baruah_uozuig.webp"}    ],
  },
  {
    category: "HOSPITALITY TEAM",
    members: [
        {id: 1, name: "Abhirohan Kashyap", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743684228/WhatsApp_Image_2025-04-02_at_10.34.38_PM_1_vzdfbf.webp"},
        {id: 2, name: "Anurag Borgohain", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743684246/WhatsApp_Image_2025-04-02_at_10.34.37_PM_1_wao5ox.jpg"}
    ],
  },
  {
    category: "FOOD TEAM",
    members: [
        {id: 1, name: "Aman Kalita", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743684426/WhatsApp_Image_2025-04-02_at_10.34.34_PM_1_ann4oi.jpg"},
        {id: 2, name: "Nabadeep Choudhary", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743684522/IMG-20250329-WA0000_-_ME_D_109_NABADEEP_CHOUDHURY_o3x9pn.jpg"}
    ],
  },
  {
    category: "SECURITY TEAM",
    members: [
        {id: 1, name: "Bhargab Raj Gogoi", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743684939/WhatsApp_Image_2025-04-02_at_10.34.38_PM_2_ycwwag.jpg"},
    ],
  },
  {
    category: "CONTENT TEAM",
    members: [
        {id: 1, name: "Rubul kalita", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612797/IMG_20250328_024651_-_EE_036_Rubul_hdejrc.webp"},
        {id: 2, name: "Prateeksha", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612826/IMG_9741_-_prateeksha_Majumdar_m3xymr.webp"},
        {id: 3, name: "Ananya Chetia", src: "https://res.cloudinary.com/dqobuxkcj/image/upload/v1743612863/IMG-20241222-WA0076_-_ECE_002_Ananya_Chetia_t8x6ix.webp"}
    ],
  },
  {
    category: "DECORATION TEAM",
    members: [
        {id: 1, name: "Vishal Varma", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743680271/WhatsApp_Image_2025-04-02_at_10.34.26_PM_6_u0z5ed.webp"},
        {id: 2, name: "Hiramani Das", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743680284/IMG-20241017-WA0060_-_CE_112_Hira_Mani_Das_bnvpad.jpg"},
        {id: 3, name: "Mrityunjoy Chinte", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743680784/WhatsApp_Image_2025-04-02_at_10.34.38_PM_i2rgmd.webp"},
        {id: 4, name: "Uttirna Talukdar", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743680808/WhatsApp_Image_2025-04-02_at_10.34.28_PM_1_tvlcvl.webp"},
        {id: 5, name: "Angkita Baro", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743680849/IMG-20250401-WA0050_-_EE_034_Angkita_Baro_kztwhg.webp"},
        {id: 6, name: "Himangshu Sarma", src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743681026/WhatsApp_Image_2025-04-02_at_10.34.28_PM_2_mct7rw.webp"}
    ],
  },
  {
    category: "DESIGN TEAM",
    members: [
      { id: 8, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743679901/WhatsApp_Image_2025-02-15_at_12.01.52_AM_-_EE_053_Ishan_n53jyv.jpg", name: "Ishan Das" },
      { id: 9, src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743679969/IMG-20250401-WA0003_-_EE_051_Dorothy_hkv8pn.jpg", name: "Dorothy Phukan" },
    ],
  },
];

const Team = () => {
  const [memberView, setMemberView] = useState("core");
  return (
    <div className="bg-[#F8EAD0] min-h-screen w-full max-w-screen flex flex-col items-center text-center relative pt-[12vh] overflow-hidden ">

      {/* Header Section */}
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt=""
        className="mt-6 laptop2:w-[360px] mobile2:w-[200px]" />
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
          <div className="w-[18.6vw] h-auto aspect-square bg-white rounded-full flex items-center justify-center shadow-md z-10 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1743618531/IMG_174158960667ce8c6628e75_dehr37.webp" alt="" className="h-full aspect-square object-cover rounded-full" />
          </div>
          <div className="absolute top-[16vw] min-w-[16vw] h-[4.6vw] posua mobile2:text-[1.6vw] tablet2:text-[2vh] laptop2:text-[3vh] bg-[#721B1E] text-white w-max py-2.5 laptop2:py-4 px-4 rounded-full z-20 flex justify-center items-center group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
            <h1 className="group-hover:-translate-y-3 transition-transform duration-300">
              Prof. N. B. D. Choudhury
            </h1>
            <h1 className="posua text-white opacity-0 absolute bottom-1 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300">President</h1>
          </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742828414/1_81_gj3nn0.png" alt=""
            className="absolute top-[50%] -left-[3rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300" />
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742829354/1_82_ujxqrd.png" alt=""
            className="absolute top-[50%] -right-[3.1rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300" />
        </div>
        <div className="relative text-center group z-10 bg-[url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743189245/hobo_japi_ymvf2t.png')] bg-cover bg-center h-auto aspect-square w-[19.5vw] flex justify-center items-center">
          <div className="w-[18.6vw] h-auto aspect-square bg-white rounded-full flex items-center justify-center shadow-md z-10 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1743618533/rupak_lcsbkv.webp" alt="" className="h-full aspect-square object-cover rounded-full" />
          </div>
          <div className="absolute top-[16vw] w-[16vw] min-w-[16vw] h-[4.6vw] posua mobile2:text-[1.6vw] tablet2:text-[2vh] laptop2:text-[3vh] bg-[#721B1E] text-white group-hover:w-max py-2.5 laptop2:py-4 px-4 rounded-full z-20 flex justify-center items-center group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
            <h1 className="group-hover:-translate-y-3 transition-transform duration-300 truncate">
              Dr. Rupak Dutta
            </h1>
            <h1 className="posua text-white opacity-0 absolute bottom-1 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300 text-nowrap">Vice-President</h1>
          </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742828414/1_81_gj3nn0.png" alt=""
            className="absolute top-[50%] -left-[3rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300" />
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742829354/1_82_ujxqrd.png" alt=""
            className="absolute top-[50%] -right-[3.1rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300" />
        </div>
        <div className=" relative text-center group z-30 bg-[url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1743189245/hobo_japi_ymvf2t.png')]  bg-cover bg-center h-auto aspect-square w-[19.5vw] flex justify-center items-center">
          <div className="w-[18.6vw] h-auto aspect-square bg-white rounded-full flex items-center justify-center shadow-md z-10 group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
            <img src="https://res.cloudinary.com/dmezugavw/image/upload/v1743618531/malaya_fqmdje.webp" alt="" className="h-full aspect-square object-cover rounded-full" />
          </div>
          <div className="absolute top-[16vw] w-[16vw] min-w-[16vw] h-[4.6vw] posua mobile2:text-[1.6vw] tablet2:text-[2vh] laptop2:text-[3vh] bg-[#721B1E] text-white group-hover:w-max py-2.5 laptop2:py-4 px-4 rounded-full z-20 flex justify-center items-center group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300">
            <h1 className="group-hover:-translate-y-3 transition-transform duration-300 truncate">
              Dr. Malaya D. Borah
            </h1>
            <h1 className="posua text-white opacity-0 absolute bottom-1 left-[50%] -translate-x-[50%] text-2xl group-hover:opacity-100 z-40 transition-all duration-300 text-nowrap">Vice-President</h1>
          </div>
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742828414/1_81_gj3nn0.png" alt=""
            className="absolute top-[50%] -left-[3rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300" />
          <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742829354/1_82_ujxqrd.png" alt=""
            className="absolute top-[50%] -right-[3.1rem] h-[70%] group-hover:translate-x-6 group-hover:translate-y-8 transition-transform duration-300" />
        </div>
      </div>
      {main.map((image) => (
        <>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742815614/frame1-removebg-preview_2_1_m9yltj.png" alt="" 
      className=" laptop2:w-[360px] mobile2:w-[200px] hidden laptop2:block mt-[20vh]"/>
      <div className="flex mobile2:mt-40 laptop2:mt-0">
        <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 z-10"/>
      <div className="posua mobile2:text-[3vh] laptop2:text-[10vh] text-[#CB2229]">{image.category}</div>
      <img src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1742835372/bohag_bihu-removebg-preview_1_et3m2s.png" alt="" 
        className="mobile2:h-[10vh] laptop2:h-[24vh] mobile2:-translate-y-9.5 laptop2:-translate-y-16 scale-x-[-1] z-10"/>
      </div>
      <div className="flex mobile2:w-[78%] tablet2:w-[95%] tablet2:gap-x-[vw] laptop2:w-[78%] flex-wrap laptop2:gap-x-30 z-30 justify-center">
      {image.members.map((img) => (
          <div key={img.id} className="relative bg-transparent">
            <div className="relative p-4 mobile2:mx-4 laptop2:mx-0 group scale-75 laptop2:scale-100" >
              <div className="relative border-30 border-[#721B1E] bg-white z-10">
                <img src={img.src} alt={img.name} className="w-56 h-72 object-cover z-30" />
              </div>
              <div className="posua relative text-white text-center py-2 text-3xl z-40 -translate-y-6 group-hover:-translate-y-10 transition-transform duration-300">
                {img.name}
              </div>
              <h1 className={`posua text-white opacity-0 absolute bottom-9 left-[50%] -translate-x-[50%] group-hover:opacity-100 z-40 transition-all duration-300 whitespace-nowrap ${img.title?"text-xl":"text-2xl"}`}>{img.title?img.title:"Head"}</h1>
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
      </>
        ))}
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

export { Team };
