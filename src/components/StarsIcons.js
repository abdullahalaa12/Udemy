import React from "react";
import styles from "../style_modules/home_page/RatingContainerStyles.module.css";

function StarsIcons(props) {
  const fullStarIconSrc =
    "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";
  const halfStarIconSrc =
    "https://cdn-icons-png.flaticon.com/512/2107/2107737.png";
  const emptyStarIconSrc =
    "https://cdn-icons-png.flaticon.com/512/1828/1828970.png";

  const starsIcons = [];
  for (let i = 0; i < 5; i++) {
    starsIcons[i] = (
      <img
        key={i}
        className={styles["star-icon"]}
        alt=""
        src={
          props.rating >= i + 1
            ? fullStarIconSrc
            : props.rating > i
            ? halfStarIconSrc
            : emptyStarIconSrc
        }
      />
    );
  }
  return starsIcons;
}

export default StarsIcons;
