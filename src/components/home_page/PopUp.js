import React, { useState } from "react";
import styles from "../../style_modules/home_page/PopUp.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

function PopUp(props) {
  const [like, setLike] = useState(false);
  const { courseObject } = props;

  const convertDate = (date) => {
    const arr_date = date.split("-");
    const months = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months[parseInt(arr_date[1])] + " " + arr_date[0];
  };

  const Objectives = () => {
    return courseObject.objectives_summary.map((objective, index) => {
      return (
        <li key={index}>
          <CheckIcon sx={{ fontSize: 16 }} />
          <span>{objective}</span>
        </li>
      );
    });
  };

  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement={
        props.displayOnRight == null
          ? "bottom"
          : props.displayOnRight
          ? "right"
          : "left"
      }
      show={props.displayPopup}
      overlay={
        <Popover
          onMouseEnter={() => props.setDisplayPopup(true)}
          onMouseLeave={() => props.setDisplayPopup(false)}
          id="popover-trigger-hover-focus"
        >
          <div className={styles["container"]}>
            <Link className={styles["title"]} to={"course/" + courseObject.id}>
              <h2 className={styles["title"]}>{courseObject.title}</h2>
            </Link>
            <p className={styles["updated"]}>
              Updated{" "}
              <strong>{convertDate(courseObject.last_update_date)}</strong>
            </p>
            <p className={styles["details"]}>
              {courseObject.content_info +
                " · " +
                courseObject.instructional_level +
                " · Subtitles"}
            </p>
            <p className={styles["headline"]}>{courseObject.headline}</p>
            <ul className={styles["objectives"]}>
              <Objectives />
            </ul>
            <div className={styles["buynow-like"]}>
              <button className={styles["buynow-btn"]}>Add to cart</button>
              <button
                onClick={() => setLike(!like)}
                className={
                  like ? styles["like-clicked"] : styles["like-button"]
                }
              >
                <FavoriteBorderIcon sx={{ fontSize: 24 }} />
              </button>
            </div>
          </div>
        </Popover>
      }
    >
      {props.children}
    </OverlayTrigger>
  );
}

export default PopUp;
