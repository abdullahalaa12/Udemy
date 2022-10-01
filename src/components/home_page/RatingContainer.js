import React from "react";
import styles from "../../style_modules/home_page/RatingContainerStyles.module.css";
import StarsIcons from "../StarsIcons";

function RatingContainer(props) {
  return (
    <div className={styles["rating-container"]}>
      <p className={styles["rating"]}>{props.rating}</p>
      <StarsIcons rating={props.rating} />
      <p className={styles["no-students"]}>
        {"(" + props.students.toLocaleString("en-US") + ")"}
      </p>
    </div>
  );
}

export default RatingContainer;
