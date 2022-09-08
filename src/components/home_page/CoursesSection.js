import React from "react";
import CourseCard from "./CourseCard";
import styles from "../../style_modules/home_page/CoursesSectionStyles.module.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const CoursesCardsContainer = (props) => {
  const { coursesData, searchQuery } = props;

  const courses = coursesData.items.map((courseObj) => {
    if (
      searchQuery &&
      !courseObj.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return null;
    return <CourseCard key={courseObj.id} courseObject={courseObj} />;
  });

  return (
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
      <div className={styles["courses-container"]}>{courses}</div>
    </div>
  );
};

function CoursesSection(props) {
  const LoadingSpinner = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  };

  const CardsContainer = () => {
    return props.coursesData ? (
      <CoursesCardsContainer
        coursesData={props.coursesData.courses[0]}
        searchQuery={props.searchQuery}
      />
    ) : (
      <LoadingSpinner />
    );
  };

  return (
    <section className={styles["main"]}>
      <h1 className={styles["heading"]}>A broad selection of courses</h1>
      <p className={styles["promo"]}>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      <ul>{/*courses tabs */}</ul>
      <CardsContainer />
    </section>
  );
}

export default CoursesSection;
