import React from "react";
import styles from "../style_modules/CourseCardStyles.module.css";
import RatingContainer from "./RatingContainer";

function CourseCard(props) {
  let courseObj = props.courseObject;
  let bestSeller =
    courseObj.bestSeller === true ? (
      <div className={styles["bestseller"]}>Bestseller</div>
    ) : null;

  return (
    <span className={styles["course"]}>
      <img
        className={styles["course-img"]}
        alt="Course"
        src={courseObj.image}
      ></img>
      <h3 className={styles["course-name"]}>{courseObj.title}</h3>
      <p className={styles["course-author"]}>{courseObj.author}</p>
      <RatingContainer
        rating={courseObj.rating}
        students={courseObj.students}
      ></RatingContainer>
      <h3 className={styles["course-price"]}>{"E£" + courseObj.price}</h3>
      <p className={styles["course-old-price"]}>{"E£" + courseObj.old_price}</p>
      {bestSeller}
    </span>
  );
}

export default CourseCard;
