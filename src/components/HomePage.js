import React from "react";
import CoursesSection from "./home_page/CoursesSection";
import HomeHeader from "./home_page/HomeHeader";
import styles from "../style_modules/HomePage.module.css";

function HomePage(props) {
  const { courses, searchQuery } = props;

  return (
    <main className={styles["main"]}>
      <HomeHeader />

      <CoursesSection searchQuery={searchQuery} coursesData={courses} />
    </main>
  );
}

export default HomePage;
