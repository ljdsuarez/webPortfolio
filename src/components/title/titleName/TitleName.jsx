import React from "react";
import styles from "./TitleName.module.css";

const TitleName = (props) => {
  return (
    <div
      className={`${styles.title} ${
        props.className == "laurenz" && styles.laurenz
      } ${props.className == "julian" && styles.julian}`}
    >
      {props.name}
    </div>
  );
};

export default TitleName;
