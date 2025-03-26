import React, { useState, useRef, useEffect } from "react";
import styles from "./Carausal.module.scss";

const MAX_VISIBILITY = 2;

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive((prevActive) => (prevActive + 1) % count);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [count]);

  return (
    <div className={styles.carouselCont}>
      <div className={styles.carousel} ref={carouselRef}>
        {active >= 0  && (
          <button className={styles.left} onClick={() => setActive((i) => i - 1)}>
            &lt;
          </button>
        )}
        {React.Children.map(children, (child, i) => {
          const offset = active - i;
          const absOffset = Math.abs(offset);
          let scale = 1;

          if (absOffset > 0) {
            scale = 1 - (absOffset * 0.10);
            scale = Math.max(0.8, scale);
          }

          const translationFactor = 0.70;

          return (
            <div
              className={styles.cardContainer}
              style={{
                "--active": i === active ? 1 : 0,
                "--offset": offset,
                "--direction": Math.sign(offset),
                "--abs-offset": absOffset,
                transform: `translateX(calc(${offset * cardWidth * translationFactor}px - ${offset * cardWidth * (1 - scale)}px)) scale(${scale})`,
                zIndex: `${count - absOffset}`,
                opacity: absOffset > MAX_VISIBILITY ? 0 : 1,
                pointerEvents: absOffset > MAX_VISIBILITY ? "none" : "auto",
                display: absOffset > MAX_VISIBILITY ? 'none' : 'block',
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
              }}
            >
              {child}
            </div>
          );
        })}
        {active < count - 1 && (
          <button className={styles.right} onClick={() => setActive((i) => i + 1)}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
