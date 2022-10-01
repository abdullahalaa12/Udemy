import React from "react";
import { useState } from "react";
import styles from "../../style_modules/course_page/ShowmoreText.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ShowmoreText(props) {
  const [showMore, setShowMore] = useState(false);

  const ShowButton = () => {
    return (
      <div
        className={styles["showmore-button"]}
        onClick={() => setShowMore(!showMore)}
      >
        <p>{`Show ${showMore ? "less" : "more"}`}</p>
        {showMore ? (
          <KeyboardArrowUpIcon sx={{ fontSize: 16 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
        )}
      </div>
    );
  };

  return (
    <>
      <div className={!showMore && styles["container"]}>{props.children}</div>
      <ShowButton />
    </>
  );
}

export default ShowmoreText;
