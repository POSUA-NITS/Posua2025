import React, { useState } from "react";
import styles from "./Carausal.module.scss";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className={styles.carouselCont}>
      <div className={styles.carousel}>
        {active > 0 && (
          <button className={styles.left} onClick={() => setActive((i) => i - 1)}>
            &lt;
          </button>
        )}
        {React.Children.map(children, (child, i) => {
          const offset = active - i;
          return (
            <div
              className={styles.cardContainer}
              style={{
                "--active": i === active ? 1 : 0,
                "--offset": offset % (MAX_VISIBILITY * 2 + 1),
                "--direction": Math.sign(offset),
                "--abs-offset": Math.abs(offset)/(MAX_VISIBILITY * 2 + 1),
                pointerEvents: Math.abs(offset) <= MAX_VISIBILITY ? "auto" : "none",
                opacity: Math.abs(offset) > MAX_VISIBILITY ? "0" : "1",
                display: Math.abs(offset) > MAX_VISIBILITY ? "none" : "block",
                zIndex: `${offset >= 0 ? offset+3 : Math.abs(offset)}`,

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
