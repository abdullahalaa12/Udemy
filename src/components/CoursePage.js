import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Header from "./course_page/Header";
import CourseContent from "./course_page/CourseContent";
import Reviews from "./course_page/Reviews";
import styles from "../style_modules/CoursePage.module.css";

function CoursePage(props) {
  const { courseId } = useParams();
  const courseObject = props.courses.items.find((x) => x.id == courseId);

  useEffect(() => {
    document.title = courseObject.title + " | Udemy";
  }, []);

  if (!courseObject) return <PageNotFound />;

  return (
    <>
      <Header
        title={courseObject.title}
        headline={courseObject.headline}
        rating={courseObject.avg_rating}
        num_reviews={courseObject.num_reviews}
        num_subscribers={courseObject.num_subscribers}
        instructors={courseObject.visible_instructors}
        last_update={courseObject.last_update_date}
        language={courseObject.locale}
        caption_languages={courseObject.caption_languages}
        context_info={courseObject.context_info}
      />
      <main className={styles["main-container"]}>
        <div className={styles["main-content"]}>
          <CourseContent content={props.content[courseId]} />

          <Reviews reviews={props.reviews[courseId]} />
        </div>
      </main>
    </>
  );
}

export default CoursePage;
