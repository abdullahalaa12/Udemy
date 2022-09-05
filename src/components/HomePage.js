import React from "react";
import CoursesCardsSection from "./home_page/CoursesCardsSection";

function HomePage(props) {
  const { courses } = props;

  return <CoursesCardsSection coursesData={courses} />;
}

export default HomePage;
