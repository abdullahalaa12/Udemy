import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Header from "./course_page/Header";
import CourseContent from "./course_page/CourseContent";
import Feedback from "./course_page/Feedback";
import styles from "../style_modules/CoursePage.module.css";
import SideBar from "./course_page/SideBar";
import CoursePageNav from "./course_page/CoursePageNav";

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

      <main>
        <CoursePageNav />
        <div className={styles["main-container"]}>
          <SideBar courseObject={courseObject} />
          <div className={styles["main-content"]}>
            <CourseContent
              courseObject={courseObject}
              content={props.content[courseId]}
            />
            <Feedback
              courseObject={courseObject}
              reviews={props.reviews[courseId]}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default CoursePage;
