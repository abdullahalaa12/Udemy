import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import styles from "../../style_modules/home_page/CoursesSectionStyles.module.css";

function CoursesCardsSection(props) {
  const { coursesData, searchQuery } = props;

  const CoursesCardsContainer = () => {
    const courses = coursesData.items.map((courseObj) => {
      if (
        searchQuery &&
        !courseObj.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return null;
      return (
        <Link to={"course/" + courseObj.id} key={courseObj.id}>
          <CourseCard courseObject={courseObj} />
        </Link>
      );
    });

    return <div className={styles["courses-container"]}>{courses}</div>;
  };

  return (
    <section className={styles["main"]}>
      <h1 className={styles["heading"]}>A broad selection of courses</h1>
      <p className={styles["promo"]}>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      <ul>{/*courses tabs */}</ul>
      <div className={styles["courses-section"]}>
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
      </div>
    </section>
  );
}

export default CoursesCardsSection;
