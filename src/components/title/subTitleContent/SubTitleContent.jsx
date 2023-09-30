import React from "react";
import styles from "./subTitleContent.module.css";

const SubTitleContent = (props) => {
  return <div className={styles.subTitleContent}>{props.children}</div>;
};

export default SubTitleContent;
