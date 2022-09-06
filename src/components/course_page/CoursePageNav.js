import React from "react";
import styles from "../../style_modules/course_page/CoursePageNav.module.css";

function CoursePageNav() {
  return (
    <div className={styles["course-nav-position"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <a href="#overview">
            <div className={styles["link"]}>Overview</div>
          </a>
          <a href="#curriculum">
            <div className={styles["link"]}>Curriculum</div>
          </a>
          <a href="#instructor-1">
            <div className={styles["link"]}>Instructor</div>
          </a>
          <a href="#reviews">
            <div className={styles["link"]}>Reviews</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoursePageNav;
