import React from "react";
import styles from "./SubTitleName.module.css";

const SubTitleName = (props) => {
  return (
    <div
      className={`${styles.subTitleName} ${
        props.className == "designer" && styles.designer
      } ${props.className == "contentCreator" && styles.contentCreator}`}
    >
      {props.name}
    </div>
  );
};

export default SubTitleName;
