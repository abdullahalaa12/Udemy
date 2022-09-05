import React from "react";
import Review from "./Review";
import styles from "../../style_modules/course_page/Reviews.module.css";

function Reviews(props) {
  const { reviews } = props;

  return (
    <div className={styles["container"]}>
      {reviews.results.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}

export default Reviews;
