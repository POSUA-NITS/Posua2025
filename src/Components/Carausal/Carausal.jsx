import React, { useState, useRef, useEffect } from "react";
import styles from "./Carausal.module.scss";
import { useMediaQuery } from "@mui/material";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const count = React.Children.count(children);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const Screen1 = useMediaQuery("(min-width: 1350px)");
  const Screen2 = useMediaQuery("(min-width: 1024px)");
  const bigScreen = useMediaQuery("(min-width: 625px)");
  const VISIBLE_CARDS = bigScreen ? 5 : 3;

  useEffect(() => {
    if (carouselRef.current && children) {
      const firstCard = carouselRef.current.querySelector(`.${styles.cardContainer}`);
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    }
  }, [children]);

  useEffect(() => {
    if ( popupVisible) return;
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % count);
    }, 1500);
    return () => clearInterval(interval);
  }, [count, active, popupVisible]);

  const handleCardClick = (cardIndex) => {
    if (cardIndex === active) {
      setPopupVisible((prev) => !prev);
    } else {
      setActive(cardIndex);
    }
  };

  return (
    <>
    <div className={styles.carouselCont}>
      <div className={styles.carousel} ref={carouselRef}>
        {Array.from({ length: VISIBLE_CARDS }, (_, index) => {
          const cardIndex = (active + index - Math.floor(VISIBLE_CARDS / 2) + count) % count;
          const offset = index - Math.floor(VISIBLE_CARDS / 2);
          const absOffset = Math.abs(offset);
          let scale = 1;
          
          if (absOffset > 0) {
            scale = 1 - absOffset * 0.1;
            scale = Math.max(0.8, scale);
          }

          const translationFactor = Screen1 ? 0.7 : ( Screen2? 0.6: (bigScreen?0.6: 0.47));

          return (
            <div
              key={cardIndex}
              className={styles.cardContainer}
              onClick={() => handleCardClick(cardIndex)}
              style={{
                transform: `translateX(calc(${offset * cardWidth * translationFactor}px - ${offset * cardWidth * (1 - scale)}px)) scale(${scale})`,
                zIndex: `${count - absOffset}`,
                opacity: absOffset > MAX_VISIBILITY ? 0 : 1,
                pointerEvents: absOffset > MAX_VISIBILITY ? "none" : "auto",
                display: "block",
                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                cursor: "pointer",
              }}
            >
              {children[cardIndex]}
            </div>
          );
        })}
      </div>
      </div>
      {popupVisible && (
        <div className={styles.popupOverlay2} onClick={() => setPopupVisible(false)}>
          <div className={styles.popupCard}>
            {children[active]}
          </div>
        </div>
      )}
    
    </>
  );
};

export default Carousel;
