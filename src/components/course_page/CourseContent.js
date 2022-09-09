import React, { useState } from "react";
import SectionDropDown from "./SectionDropDown";
import styles from "../../style_modules/course_page/CourseContent.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ShowmoreButton from "./ShowmoreButton";
import ShowmoreText from "./ShowmoreText";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ReactMarkdown from "react-markdown";

function CourseContent(props) {
  const data = props.content.curriculum_context.data;
  const details = props.content.details;
  const courseObject = props.courseObject;

  const [expandAll, setExpandAll] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const ContentSections = () => {
    return data.sections.map((section, index) => {
      if (index >= 5 && !showMore) return null;
      return <SectionDropDown key={index} expand={expandAll} data={section} />;
    });
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
        <p className={styles["includes"]}>This course includes:</p>
        <ul className={styles["includes-list"]}>
          <div>
            <OndemandVideoIcon sx={{ fontSize: 18 }} />
            <li>{courseObject.content_info_short + " on-demand video"}</li>
          </div>
          <div>
            <InsertDriveFileIcon sx={{ fontSize: 18 }} />
            <li>{courseObject.articles + " article"}</li>
          </div>
          <div>
            <SystemUpdateAltIcon sx={{ fontSize: 18 }} />
            <li>
              {courseObject.downloadable_resources + " downloadable resources"}
            </li>
          </div>
          <div>
            <AllInclusiveIcon sx={{ fontSize: 18 }} />
            <li>Full lifetime access</li>
          </div>
          <div>
            <StayCurrentPortraitIcon sx={{ fontSize: 18 }} />
            <li>Access on mobile and TV</li>
          </div>
          <div>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 18 }} />
            <li>Certificate of completion</li>
          </div>
        </ul>
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
          {!showMore && data.sections.length > 5 ? (
            <ShowmoreButton
              setShow={setShowMore}
              content={data.sections.length - 5 + " more sections"}
            />
          ) : null}
        </div>
      </section>
      <h2>Requirements</h2>
      <ul className={styles["requirements-list"]}>
        {details.Requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <ShowmoreText>
        <h2>Description</h2>
        <div className={styles["text"]}>
          <ReactMarkdown>{details.description}</ReactMarkdown>
        </div>
        <h2>Who this course is for:</h2>
        <div className={styles["text"]}>
          <ReactMarkdown>{details.for_who}</ReactMarkdown>
        </div>
      </ShowmoreText>
    </div>
  );
}

export default CourseContent;
