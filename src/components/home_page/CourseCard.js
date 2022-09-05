import React from "react";
import styles from "../../style_modules/home_page/CourseCardStyles.module.css";
import RatingContainer from "./RatingContainer";

function CourseCard(props) {
  const { courseObject: courseObj } = props;

  const BestSeller = () => {
    return (
      courseObj.bestseller_badge_content && (
        <div className={styles["bestseller"]}>Bestseller</div>
      )
    );
  };

  return (
    <span className={styles["course"]}>
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
      <h3 className={styles["course-price"]}>{"E£" + 159.99}</h3>
      <p className={styles["course-old-price"]}>{"E£" + 299.99}</p>
      <BestSeller />
    </span>
  );
}

export default CourseCard;
