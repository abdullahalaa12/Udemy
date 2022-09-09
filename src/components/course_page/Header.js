import React from "react";
import styles from "../../style_modules/course_page/Header.module.css";
import StarsIcons from "../StarsIcons";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

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
        <img
          className={styles["course-img"]}
          alt="Course photo"
          src={courseObject.image_240x135}
        />
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
              <div>
                <NewReleasesIcon sx={{ fontSize: 16 }} />
                <p>{"Last update " + courseObject.last_update_date}</p>
              </div>
              <div>
                <LanguageIcon sx={{ fontSize: 16 }} />
                <p>{courseObject.locale.simple_english_title}</p>
              </div>
              <div>
                <ClosedCaptionIcon sx={{ fontSize: 16 }} />
                <p>{courseObject.caption_languages[0]}</p>
              </div>
            </div>
            <div className={styles["buy-container"]}>
              <div className={styles["price-container"]}>
                <h2 className={styles["price"]}>{"E£" + courseObject.price}</h2>
                <p className={styles["old-price"]}>
                  {"E£" + courseObject.old_price}
                </p>
                <p className={styles["percent-off"]}>
                  {100 -
                    Math.ceil(
                      (courseObject.price / courseObject.old_price) * 100
                    ) +
                    "% off"}
                </p>{" "}
              </div>
              <div>
                <p className={styles["days-left"]}>
                  <AccessAlarmIcon sx={{ marginRight: "5px", fontSize: 16 }} />
                  <strong>1 day</strong> left at this price!
                </p>
              </div>
            </div>

            <button
              className={`${styles["buy-btn"]} ${styles["sidebar-btn"]} ${styles["purple-btn"]}`}
            >
              Add to cart
            </button>
            <p className={styles["trial-period"]}>
              30-Day Money-Back Guarantee
            </p>
            <div className={styles["options-container"]}>
              <p>Share</p>
              <p>Gift this course</p>
              <p>Apply Coupon</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
