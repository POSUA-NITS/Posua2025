import React, { useState, useRef, useEffect } from "react";
import styles from "./Carausal.module.scss";

const MAX_VISIBILITY = 2;
const VISIBLE_CARDS = 5;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current && children) {
      const firstCard = carouselRef.current.querySelector(`.${styles.cardContainer}`);
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    }
  }, [children]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % count);
    }, 1500);

    return () => clearInterval(interval);
  }, [count, active]);

  // const handlePrev = () => setActive((i) => (i - 1 + count) % count);
  // const handleNext = () => setActive((i) => (i + 1) % count);

  return (
    <div className={styles.carouselCont}>
      <div className={styles.carousel} ref={carouselRef}>
        {/* <button className={styles.left} onClick={handlePrev}>&lt;</button> */}
        {Array.from({ length: VISIBLE_CARDS }, (_, index) => {
          const cardIndex = (active + index - Math.floor(VISIBLE_CARDS / 2) + count) % count;
          const offset = index - Math.floor(VISIBLE_CARDS / 2);
          const absOffset = Math.abs(offset);
          let scale = 1;

          if (absOffset > 0) {
            scale = 1 - absOffset * 0.1;
            scale = Math.max(0.8, scale);
          }

          const translationFactor = 0.7;

          return (
            <div
              key={cardIndex}
              className={styles.cardContainer}
              style={{
                "--active": cardIndex === active ? 1 : 0,
                "--offset": offset,
                "--direction": Math.sign(offset),
                "--abs-offset": absOffset,
                transform: `translateX(calc(${offset * cardWidth * translationFactor}px - ${offset * cardWidth * (1 - scale)}px)) scale(${scale})`,
                zIndex: `${count - absOffset}`,
                opacity: absOffset > MAX_VISIBILITY ? 0 : 1,
                pointerEvents: absOffset > MAX_VISIBILITY ? "none" : "auto",
                display: "block",
                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              }}
            >
              {children[cardIndex]}
            </div>
          );
        })}
        {/* <button className={styles.right} onClick={handleNext}>&gt;</button> */}
      </div>
    </div>
  );
};

export default Carousel;
