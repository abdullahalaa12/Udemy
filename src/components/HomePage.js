import React from "react";
import CoursesCardsSection from "./home_page/CoursesCardsSection";

function HomePage(props) {
  const { coursesData } = props;
  return <CoursesCardsSection coursesData={coursesData.courses[0]} />;
}

export default HomePage;
