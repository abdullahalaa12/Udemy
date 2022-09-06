import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Header from "./course_page/Header";
import CourseContent from "./course_page/CourseContent";
import Reviews from "./course_page/Reviews";
import styles from "../style_modules/CoursePage.module.css";
import SideBar from "./course_page/SideBar";

function CoursePage(props) {
  const { courseId } = useParams();
  const courseObject = props.courses.items.find((x) => x.id == courseId);

  useEffect(() => {
    if (courseObject) document.title = courseObject.title + " | Udemy";
  }, []);

  if (!courseObject) return <PageNotFound />;

  return (
    <>
      <Header courseObject={courseObject} />

      <main className={styles["main-container"]}>
        <SideBar courseObject={courseObject} />
        <div className={styles["main-content"]}>
          <CourseContent content={props.content[courseId]} />
          <Reviews reviews={props.reviews[courseId]} />
        </div>
      </main>
    </>
  );
}

export default CoursePage;
