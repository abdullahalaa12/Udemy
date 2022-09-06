import React, { useState, useEffect } from "react";
import styles from "../../style_modules/course_page/SideBar.module.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

function SlideBar(props) {
  const { courseObject } = props;

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles["sidebar"]} ${
        scrollPosition >= 450 && styles["sidebar-sticky"]
      }`}
    >
      {scrollPosition < 450 && (
        <img
          className={styles["course-img"]}
          alt="Course photo"
          src={courseObject.image_480x270}
        />
      )}
      <div className={styles["buy-container"]}>
        <div className={styles["price-container"]}>
          <h2 className={styles["price"]}>{"E£" + courseObject.price}</h2>
          <p className={styles["old-price"]}>{"E£" + courseObject.old_price}</p>
          <p className={styles["percent-off"]}>
            {Math.ceil((courseObject.price / courseObject.old_price) * 100) +
              "% off"}
          </p>{" "}
          <p className={styles["days-left"]}>
            <AccessAlarmIcon sx={{ marginRight: "5px", fontSize: 16 }} />
            <strong>1 day</strong> left at this price!
          </p>
        </div>

        <button className={`${styles["sidebar-btn"]} ${styles["purple-btn"]}`}>
          Add to cart
        </button>
        <button className={styles["sidebar-btn"]}>Buy now</button>
        <p className={styles["trial-period"]}>30-Day Money-Back Guarantee</p>
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
        <div className={styles["options-container"]}>
          <p>Share</p>
          <p>Gift this course</p>
          <p>Apply Coupon</p>
        </div>
      </div>
      <div className={styles["training-container"]}>
        <h2 className={styles["training-heading"]}>
          Training 5 or more people?
        </h2>
        <p className={styles["training-text"]}>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button
          className={`${styles["sidebar-btn"]} ${styles["training-btn"]}`}
        >
          Try Udemy Business
        </button>
      </div>
    </div>
  );
}

export default SlideBar;
