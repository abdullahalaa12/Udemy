import React from "react";
import styles from "../../style_modules/course_page/Header.module.css";
import StarsIcons from "../StarsIcons";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";

function Header(props) {
  const { courseObject } = props;

  const NavRatingContainer = () => {
    return (
      <div className={styles["nav-rating-container"]}>
        <p className={styles["nav-rating"]}>
          {courseObject.avg_rating.toFixed(1)}
        </p>
        <StarsIcons rating={courseObject.avg_rating} />
        <a href="#reviews" className={styles["nav-no-reviews"]}>
          <p>
            {"(" +
              courseObject.num_reviews.toLocaleString("en-US") +
              " ratings)"}
          </p>
        </a>
        <p className={styles["nav-no-students"]}>
          {" "}
          {courseObject.num_subscribers.toLocaleString("en-US") + " students"}
        </p>
      </div>
    );
  };

  const Instructors = () => {
    return courseObject.visible_instructors.map((instructor, index) => {
      return (
        <a
          key={index}
          href={"#instructor-" + (index + 1)}
          className={styles["nav-no-reviews"]}
        >
          {instructor.display_name}
        </a>
      );
    });
  };

  return (
    <>
      <div className={styles["nav-header"]}>
        <h1 className={styles["nav-title"]}>{courseObject.title}</h1>
        <NavRatingContainer />
      </div>
      <div className={styles["nav-shadow-remover"]} />
      <header className={styles["header-section"]}>
        <div className={styles["header-position-manager"]}>
          <div className={styles["header-container"]}>
            <p className={styles["context-info"]}>
              {courseObject.context_info.category.title +
                " > " +
                courseObject.context_info.label.title}
            </p>
            <h1 className={styles["header-title"]}>{courseObject.title}</h1>
            <p className={styles["header-headline"]}>{courseObject.headline}</p>
            <NavRatingContainer />
            <p className={styles["header-createdby"]}>
              {"Created by "}
              <Instructors />
            </p>

            <div className={styles["header-lang"]}>
              <NewReleasesIcon sx={{ fontSize: 16 }} />
              <p>{"Last update " + courseObject.last_update_date}</p>
              <LanguageIcon sx={{ fontSize: 16 }} />
              <p>{courseObject.locale.simple_english_title}</p>
              <ClosedCaptionIcon sx={{ fontSize: 16 }} />
              <p>{courseObject.caption_languages[0]}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
