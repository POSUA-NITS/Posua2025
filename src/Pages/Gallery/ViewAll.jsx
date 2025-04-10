import React, { useState } from "react";
import styles from "./ViewAll.module.scss"; // Import the same CSS module if styles are shared
import { useNavigate } from "react-router-dom";

const ViewAll = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [year1, setYear1] = useState(true);
  const [year2, setYear2] = useState(false);
  const [year3, setYear3] = useState(false);

  const images1 = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509260/1_hvqht0.webp",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509281/2_uqbilo.webp",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509282/4_orb82i.webp",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509284/5_tesblx.webp",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509284/7_gzazxv.webp",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509284/8_jhilxh.webp",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509284/3_aepoy6.webp",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509285/9_jyo45r.webp",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509285/10_lpsvv2.webp",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509290/6_atocaa.webp",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509322/13_msrlue.webp",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509322/12_g60acq.webp",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509323/15_ozmnyd.webp",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509325/14_wj9dpq.webp",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509324/16_qnu1hp.webp",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509323/11_fr9sih.webp",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509325/17_kuroln.webp",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509327/18_usmbmx.webp",
    }
  ];
  const images2 = [
    { id: 1, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743660117/WhatsApp_Image_2025-04-02_at_23.07.59_x2mlyf.webp" },
   
    {
      id: 12,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743660154/Screenshot_2025-04-03_112657_ku0q9z.webp",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743660118/WhatsApp_Image_2025-04-02_at_23.08.01_up0qyh.webp",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783238/POSUA%20Gallery/2019/56852764_2285148264882959_2544134228656783360_n_vaau9j.webp",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743660154/Screenshot_2025-04-03_112838_hp3u5h.webp",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743660153/Screenshot_2025-04-03_112755_lrdfln.webp",
    },
    {
      id: 19,
      url: " https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p55_1_q1nxuk.webp",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743660117/WhatsApp_Image_2025-04-02_at_23.08.00_jpcoxm.webp",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
  ];
  const images3 = [
    {
      id: 1,
      url:  "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/8_eap73g.webp",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp",
    },
   
  ];

  const handleNext = (images) => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (images) => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };
  const navigate = useNavigate();

  return (
    <div className={styles.viewAllContainer}>
      {/* <div className={styles.flower}>
        <img
          src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742904113/flower_oohmzu.svg"
          alt="flower" 
          className={styles.sideFlower}
        />
      </div> */}

      <div className={styles.content}>
        <div className={styles.section1}>
          <p className={styles.title}>Photo Gallery</p>
          <div className={styles.wrapper1}>
            <div className={styles.year_container}>
              <button
                className={`${styles.year_button} ${
                  year1 ? styles.active : ""
                }`}
                onClick={() => {
                  setYear1(true);
                  setYear2(false);
                  setYear3(false);
                }}
              >
                <span>2024</span>
              </button>

              <button
                className={`${styles.year_button} ${
                  year2 ? styles.active : ""
                }`}
                onClick={() => {
                  setYear1(false);
                  setYear2(true);
                  setYear3(false);
                }}
              >
                <span>2023</span>
              </button>

              <button
                className={`${styles.year_button} ${
                  year3 ? styles.active : ""
                }`}
                onClick={() => {
                  setYear1(false);
                  setYear2(false);
                  setYear3(true);
                }}
              >
                <span>2022</span>
              </button>
            </div>

            <button className={styles.back_button} onClick={()=>navigate('/gallery')}>
              <span>Back</span>
            </button>
          </div>
        </div>

        {year1 && (
          <div className={styles.section2+" place-items-center"}>
            {images1.map((image, index) => (
              <div
                key={image.id}
                className={styles.card+" scale-90"}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${image.id}`}
                  className={styles.image+" object-cover"}
                />
              </div>
            ))}
          </div>
        )}

        {year2 && (
          <div className={styles.section2}>
            {images2.map((image, index) => (
              <div
                key={image.id}
                className={styles.card+" scale-90"}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${image.id}`}
                  className={styles.image+" object-cover"}
                />
              </div>
            ))}
          </div>
        )}

        {year3 && (
          <div className={styles.section2}>
            {images3.map((image, index) => (
              <div
                key={image.id}
                className={styles.card+" scale-90"}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${image.id}`}
                  className={styles.image+" object-cover"}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {year1 && (
        <>
          {selectedImage !== null && (
            <div
              className={styles.popup}
              onClick={() => setSelectedImage(null)}
            >
              <div className={styles.popUpWrapper}>
                <div
                  className={styles.popupContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={styles.arrow}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(images1);
                    }}
                  >
                    &lt;
                  </button>
                  <img
                    src={images1[selectedImage].url}
                    alt="Popup"
                    className={styles.popupImage+" object-cover"}
                  />
                  <button
                    className={styles.arrow}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(images1);
                    }}
                  >
                    &gt;
                  </button>
                  <button
                    className={styles.backButton}
                    onClick={() => setSelectedImage(null)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {year2 && (
        <>
          {selectedImage !== null && (
            <div
              className={styles.popup}
              onClick={() => setSelectedImage(null)}
            >
              <div className={styles.popUpWrapper}>
                <div
                  className={styles.popupContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={styles.arrow}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(images2);
                    }}
                  >
                    &lt;
                  </button>
                  <img
                    src={images2[selectedImage].url}
                    alt="Popup"
                    className={styles.popupImage}
                  />
                  <button
                    className={styles.arrow}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(images2);
                    }}
                  >
                    &gt;
                  </button>
                  <button
                    className={styles.backButton}
                    onClick={() => setSelectedImage(null)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {year3 && (
        <>
          {selectedImage !== null && (
            <div
              className={styles.popup}
              onClick={() => setSelectedImage(null)}
            >
              <div className={styles.popUpWrapper}>
                <div
                  className={styles.popupContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={styles.arrow}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(images3);
                    }}
                  >
                    &lt;
                  </button>
                  <img
                    src={images3[selectedImage].url}
                    alt="Popup"
                    className={styles.popupImage}
                  />
                  <button
                    className={styles.arrow}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(images3);
                    }}
                  >
                    &gt;
                  </button>
                  <button
                    className={styles.backButton}
                    onClick={() => setSelectedImage(null)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ViewAll;
