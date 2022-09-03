import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import styles from "../../style_modules/home_page/CoursesCardsSectionStyles.module.css";

function CoursesCardsSection(props) {
  const { coursesData } = props;

  const CoursesCardsContainer = () => {
    const courses = coursesData.items.map((courseObj) => {
      return (
        <Link to={"courses/" + courseObj.id}>
          <CourseCard key={courseObj.id} courseObject={courseObj} />
        </Link>
      );
    });

    return <div className={styles["courses-container"]}>{courses}</div>;
  };

  return (
    <section className={styles["courses-section"]}>
      <article className={styles["courses-tab-exp"]}>
        <h2 className={styles["courses-tab-title"]}>{coursesData.header}</h2>
        <p>{coursesData.description}</p>
        <a
          href="#"
          className={`${styles["white-button"]} ${styles["explore-btn"]}`}
        >
          {"Explore " + coursesData.title}
        </a>
      </article>
      <CoursesCardsContainer />
    </section>
  );
}

export default CoursesCardsSection;
