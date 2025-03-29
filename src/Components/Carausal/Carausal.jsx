import React, { useState, useRef, useEffect } from "react";
import styles from "./Carausal.module.scss";
import { useMediaQuery } from "@mui/material";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = React.Children.count(children);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
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
    if (paused) return;
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % count);
    }, 1500);
    return () => clearInterval(interval);
  }, [count, active, paused]);

  const handleCardClick = (cardIndex) => {
    if (cardIndex === active) {
      setPaused((prevPaused) => !prevPaused);
    } else {
      setActive(cardIndex);
    }
  };

  return (
    <div className={styles.carouselCont}>
      <div className={styles.carousel} ref={carouselRef}>
        {Array.from({ length: VISIBLE_CARDS }, (_, index) => {
          const cardIndex = (active + index - Math.floor(VISIBLE_CARDS / 2) + count) % count;
          const offset = index - Math.floor(VISIBLE_CARDS / 2);
          const absOffset = Math.abs(offset);
          let scale = 1;
          
          if (cardIndex === active && paused) {
            scale = 1.3;
          } else if (absOffset > 0) {
            scale = 1 - absOffset * 0.1;
            scale = Math.max(0.8, scale);
          }

          const translationFactor = bigScreen ? 0.7 : 0.47;

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
  );
};

export default Carousel;
