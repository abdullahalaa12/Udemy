import React from "react";
import CourseCard from "./CourseCard";
import styles from "../style_modules/CoursesCardsSectionStyles.module.css";

function CoursesCardsSection(props) {
  const coursesCardsContainer = props.coursesDataArray.map((courseObj) => {
    return (
      <CourseCard key={courseObj.id} courseObject={courseObj}></CourseCard>
    );
  });

  return (
    <section className={styles["courses-section"]}>
      <article className={styles["courses-tab-exp"]}>
        <h2 className={styles["courses-tab-title"]}>{props.title}</h2>
        <p>{props.description}</p>
        <a
          href="#"
          className={`${styles["white-button"]} ${styles["explore-btn"]}`}
        >
          {props.exploreButton}
        </a>
      </article>
      <div className={styles["courses"]}>{coursesCardsContainer}</div>
    </section>
  );
}

export default CoursesCardsSection;
