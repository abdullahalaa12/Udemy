import React, { useState, useRef, useEffect } from "react";
import styles from "../../style_modules/home_page/CourseCardStyles.module.css";
import RatingContainer from "./RatingContainer";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";

function CourseCard(props) {
  const [displayOnRight, setDisplayOnRight] = useState(true);
  const [displayPopup, setDisplayPopup] = useState(false);
  const { courseObject: courseObj } = props;
  const cardRef = useRef(null);

  const BestSeller = () => {
    return (
      courseObj.bestseller_badge_content && (
        <div className={styles["bestseller"]}>Bestseller</div>
      )
    );
  };

  return (
    <PopUp
      displayOnRight={displayOnRight}
      displayPopup={displayPopup}
      setDisplayPopup={setDisplayPopup}
      courseObject={props.courseObject}
    >
      <Link to={"course/" + courseObj.id}>
        <span
          ref={cardRef}
          onMouseEnter={() => {
            const remaining =
              window.innerWidth - cardRef.current.getBoundingClientRect().right;

            if (remaining > 360) {
              setDisplayOnRight(true);
              setDisplayPopup(true);
            } else if (cardRef.current.getBoundingClientRect().left > 360) {
              setDisplayOnRight(false);
              setDisplayPopup(true);
            } else setDisplayPopup(false);
          }}
          onMouseLeave={() => setDisplayPopup(false)}
          className={styles["course"]}
        >
          <img
            className={styles["course-img"]}
            alt="Course"
            src={courseObj.image_240x135}
          />
          <h3 className={styles["course-name"]}>{courseObj.title}</h3>
          <p className={styles["course-author"]}>
            {courseObj.visible_instructors[0].display_name}
          </p>
          <RatingContainer
            rating={courseObj.avg_rating.toFixed(1)}
            students={courseObj.num_reviews}
          />
          <h3 className={styles["course-price"]}>{"E£" + courseObj.price}</h3>
          <p className={styles["course-old-price"]}>
            {"E£" + courseObj.old_price}
          </p>
          <BestSeller />
        </span>
      </Link>
    </PopUp>
  );
}

export default CourseCard;
