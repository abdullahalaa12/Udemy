import React, { useState } from "react";
import SectionDropDown from "./SectionDropDown";
import styles from "../../style_modules/course_page/CourseContent.module.css";
import CheckIcon from "@mui/icons-material/Check";

function CourseContent(props) {
  const data = props.content.curriculum_context.data;
  const details = props.content.details;
  const courseObject = props.courseObject;

  const [expandAll, setExpandAll] = useState(false);

  const ContentSections = () => {
    return data.sections.map((section, index) => (
      <SectionDropDown key={index} expand={expandAll} data={section} />
    ));
  };

  const Objectives = () => {
    return courseObject.objectives_summary.map((objective, index) => {
      return (
        <div key={index}>
          <CheckIcon sx={{ fontSize: 16 }} />
          <span>{objective}</span>
        </div>
      );
    });
  };

  return (
    <div>
      <section id="overview" className={styles["objectives-container"]}>
        <h2>What you'll learn</h2>
        <div className={styles["objectives"]}>
          <Objectives />
        </div>
      </section>
      <section id="curriculum">
        <h2>Course content</h2>
        <div className={styles["content-info"]}>
          <p>
            {data.sections.length +
              " sections • " +
              data.num_of_published_lectures +
              " lectures • " +
              data.estimated_content_length_text.split(":")[0] +
              "h " +
              data.estimated_content_length_text.split(":")[1] +
              "m total length"}
          </p>
          <button onClick={() => setExpandAll(!expandAll)}>
            {expandAll ? "Collapse all sections" : "Expand all sections"}
          </button>
        </div>
        <div>
          <ContentSections />
        </div>
      </section>
      <h2>Requirements</h2>
      <ul className={styles["requirements-list"]}>
        {details.Requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <h2>Description</h2>
      <p>{details.description}</p>
      <h2>Who this course is for:</h2>
      <p>{details.for_who}</p>
    </div>
  );
}

export default CourseContent;
