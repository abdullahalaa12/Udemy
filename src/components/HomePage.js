import React from "react";
import CoursesCardsSection from "./home_page/CoursesCardsSection";

function HomePage(props) {
  const { courses, searchQuery } = props;

  return (
    <CoursesCardsSection searchQuery={searchQuery} coursesData={courses} />
  );
}

export default HomePage;
