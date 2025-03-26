import React, { useState } from "react";
import styles from "./ViewAll.module.scss"; // Import the same CSS module if styles are shared

const ViewAll = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [year1, setYear1] = useState(true);
  const [year2, setYear2] = useState(false);
  const [year3, setYear3] = useState(false);

  const images1 = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p87_1_z26am8.webp",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p57_1_tlkow7.webp",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p28_1_w1veyn.webp",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847519/POSUA%20Gallery/2021/p61_Small_hpddcy.webp",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56622560_2285129651551487_8015484988197699584_n_xqygo0.webp",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783238/POSUA%20Gallery/2019/56852764_2285148264882959_2544134228656783360_n_vaau9j.webp",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56387502_262527601367542_4087657569743536128_n_f4gpgm.webp",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 19,
      url: " https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p55_1_q1nxuk.webp",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783141/POSUA%20Gallery/2016/p131_1_qfggwi.webp",
    },
    {
      id: 21,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56242463_2285149308216188_8148921002085056512_n_xkfthk.webp",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
  ];
  const images2 = [
    // { id: 1, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp" },
    // { id: 2, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp" },
    // { id: 3, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp" },
    // { id: 4, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp" },
    // { id: 5, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p87_1_z26am8.webp" },
    // { id: 6, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p57_1_tlkow7.webp" },
    // { id: 7, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp" },
    // { id: 8, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp" },
    // { id: 9, url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp" },
    {
      id: 10,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p28_1_w1veyn.webp",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847519/POSUA%20Gallery/2021/p61_Small_hpddcy.webp",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56622560_2285129651551487_8015484988197699584_n_xqygo0.webp",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783238/POSUA%20Gallery/2019/56852764_2285148264882959_2544134228656783360_n_vaau9j.webp",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56387502_262527601367542_4087657569743536128_n_f4gpgm.webp",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 19,
      url: " https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p55_1_q1nxuk.webp",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783141/POSUA%20Gallery/2016/p131_1_qfggwi.webp",
    },
    {
      id: 21,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56242463_2285149308216188_8148921002085056512_n_xkfthk.webp",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
  ];
  const images3 = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p87_1_z26am8.webp",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p57_1_tlkow7.webp",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p28_1_w1veyn.webp",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847519/POSUA%20Gallery/2021/p61_Small_hpddcy.webp",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56622560_2285129651551487_8015484988197699584_n_xqygo0.webp",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783238/POSUA%20Gallery/2019/56852764_2285148264882959_2544134228656783360_n_vaau9j.webp",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56387502_262527601367542_4087657569743536128_n_f4gpgm.webp",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 19,
      url: " https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p55_1_q1nxuk.webp",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783141/POSUA%20Gallery/2016/p131_1_qfggwi.webp",
    },
    {
      id: 21,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56242463_2285149308216188_8148921002085056512_n_xkfthk.webp",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
  ];

  const handleNext = (images) => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (images) => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.viewAllContainer}>
      <div className={styles.flower}>
        <img
          src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742904113/flower_oohmzu.svg"
          alt="flower" 
          className={styles.sideFlower}
        />
      </div>

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
                <span>2022</span>
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
                <span>2021</span>
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
                <span>2020</span>
              </button>
            </div>

            <button className={styles.back_button} onClick={onClose}>
              <span>Back</span>
            </button>
          </div>
        </div>

        {year1 && (
          <div className={styles.section2}>
            {images1.map((image, index) => (
              <div
                key={image.id}
                className={styles.card}
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
                className={styles.card}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${image.id}`}
                  className={styles.image}
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
                className={styles.card}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${image.id}`}
                  className={styles.image}
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
                    className={styles.popupImage}
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
