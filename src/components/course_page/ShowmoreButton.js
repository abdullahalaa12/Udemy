import React from "react";
import styles from "../../style_modules/course_page/ShowmoreButton.module.css";

function ShowmoreButton(props) {
  return (
    <button
      className={styles["showmore-btn"]}
      onClick={() => {
        props.setShow(true);
      }}
    >
      {props.content}
    </button>
  );
}

export default ShowmoreButton;
