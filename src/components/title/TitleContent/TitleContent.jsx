import React from "react";
import styles from "./TitleContent.module.css";

const TitleContent = (props) => {
  return <div className={styles.titleContent}>{props.children}</div>;
};

export default TitleContent;
