import React from "react";
import styles from "../../style_modules/course_page/Instructors.module.css";
import ShowmoreText from "./ShowmoreText";
import StarRateIcon from "@mui/icons-material/StarRate";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Instructors(props) {
  const { instructorsData } = props;

  const InstructorsList = () => {
    return instructorsData.map((instructor, index) => (
      <ShowmoreText key={index}>
        <div id={`instructor-${index + 1}`} className={styles["container"]}>
          <h3 className={styles["name"]}>{instructor.display_name}</h3>
          <p className={styles["job"]}>{instructor.job_title}</p>
          <div className={styles["img-info"]}>
            <img
              className={styles["img"]}
              alt="User photo"
              src={instructor.image_100x100}
            />
            <ul className={styles["list"]}>
              <li>
                <StarRateIcon sx={{ fontSize: 17 }} />
                <span>{`${instructor.rating} Instructor Rating`}</span>
              </li>
              <li>
                <WorkspacePremiumIcon sx={{ fontSize: 17 }} />
                <span>{`${instructor.reviews.toLocaleString(
                  "en-Us"
                )} Reviews`}</span>
              </li>
              <li>
                <PeopleAltIcon sx={{ fontSize: 17 }} />
                <span>{`${instructor.students.toLocaleString(
                  "en-Us"
                )} Students`}</span>
              </li>
              <li>
                <PlayCircleIcon sx={{ fontSize: 17 }} />
                <span>{`${instructor.courses} Courses`}</span>
              </li>
            </ul>
          </div>
          <p className={styles["description"]}>{instructor.description}</p>
        </div>
      </ShowmoreText>
    ));
  };

  return (
    <section>
      <h2 className={styles["instructors-heading"]}>Instructors</h2>
      <InstructorsList />
    </section>
  );
}

export default Instructors;
