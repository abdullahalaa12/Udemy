import React, { useState } from "react";
import StarsIcons from "../StarsIcons";
import styles from "../../style_modules/course_page/Review.module.css";
import Rating from "@mui/material/Rating";
import ThumbUpIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDownOutlined";

function Review(props) {
  const [feedback, setFeedback] = useState(0);

  const { review } = props;
  return (
    <div className={styles["review-container"]}>
      <p className={styles["user-initials"]}>{review.user.initials}</p>
      <div>
        <h3 className={styles["user-name"]}>
          {review.user.public_display_name}
        </h3>
        <div className={styles["rating-since"]}>
          <Rating
            sx={{ fontSize: 20 }}
            name="half-rating-read"
            defaultValue={review.rating}
            precision={0.5}
            readOnly
          />
          <p className={styles["since"]}>
            {review.created_formatted_with_time_since}
          </p>
        </div>
        <p className={styles["content"]}>{review.content}</p>
        <p className={styles["helpful"]}>
          {feedback == 0
            ? "Was this review helpful?"
            : "Thank you for your feedback"}
        </p>
        <div className={styles["feedback-container"]}>
          <button
            onClick={() => setFeedback(feedback == 1 ? 0 : 1)}
            className={
              feedback == 1 ? styles["thump-clicked"] : styles["thump-button"]
            }
          >
            <ThumbUpIcon sx={{ fontSize: 20 }} />
          </button>
          <button
            onClick={() => setFeedback(feedback == 2 ? 0 : 2)}
            className={
              feedback == 2 ? styles["thump-clicked"] : styles["thump-button"]
            }
          >
            <ThumbDownIcon sx={{ fontSize: 20 }} />
          </button>
          <p className={styles["report"]}>Report</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
