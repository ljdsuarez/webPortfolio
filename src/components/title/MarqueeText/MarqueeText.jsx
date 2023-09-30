import React from "react";
import styles from "./MarqueeText.module.css";

const MarqueeText = () => {
  return (
    <div className={styles.marqueeTextContainer}>
      <div className={styles.marqueeText}>
        <div>laurenzjulian</div>
        <div>laurenzjulian</div>
        <div>laurenzjulian</div>
        <div>laurenzjulian</div>
      </div>
      <div className={styles.marqueeText}>
        <div>laurenzjulian</div>
        <div>laurenzjulian</div>
        <div>laurenzjulian</div>
        <div>laurenzjulian</div>
      </div>
    </div>
  );
};

export default MarqueeText;
