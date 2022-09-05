import React, { useState } from "react";
import SectionDropDown from "./SectionDropDown";
import styles from "../../style_modules/course_page/CourseContent.module.css";

function CourseContent(props) {
  const data = props.content.curriculum_context.data;
  const details = props.content.details;

  const [expandAll, setExpandAll] = useState(false);

  const ContentSections = () => {
    return data.sections.map((section, index) => (
      <SectionDropDown key={index} expand={expandAll} data={section} />
    ));
  };

  return (
    <div>
      <h2>Course content</h2>
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
      <div>
        <ContentSections />
      </div>
      <h2>Requirements</h2>
      <ul>
        {details.Requirements.map((requirement) => (
          <li>{requirement}</li>
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
