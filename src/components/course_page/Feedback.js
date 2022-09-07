import React, { useState } from "react";
import Review from "./Review";
import styles from "../../style_modules/course_page/Feedback.module.css";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

function Reviews(props) {
  const { reviews, courseObject } = props;
  const [inputValue, setInputValue] = useState("");
  const [reviewsFilter, setReviewsFilter] = useState({
    reviewsSearchQuery: "",
    rating: 0,
  });

  const RatingLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#d1d7dc",
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: "#6a6f73",
    },
  }));

  const FeedbackBars = () => {
    const ratingsCounters = [0, 0, 0, 0, 0, 0];
    reviews.results.forEach(
      (value) => ratingsCounters[Math.floor(value.rating)]++
    );
    ratingsCounters[1] += ratingsCounters[0];

    const bars = [];
    for (let i = 1; i <= 5; i++) {
      const percentage = Math.round(
        (ratingsCounters[i] / reviews.results.length) * 100
      );

      bars[i - 1] = (
        <div key={i} className={styles["bar"]}>
          <Box sx={{ width: "100%" }}>
            <RatingLinearProgress variant="determinate" value={percentage} />
          </Box>
          <Rating
            sx={{ marginLeft: 2, fontSize: 20, color: "rgb(229, 152, 25)" }}
            name="read-only"
            value={i}
            readOnly
          />
          <p className={styles["bar-percentage"]}>{percentage + "%"}</p>
        </div>
      );
    }

    return bars;
  };
  return (
    <section id="reviews">
      <h2>Student feedback</h2>
      <div className={styles["feedback-container"]}>
        <div className={styles["rating-container"]}>
          <p className={styles["rating"]}>
            {courseObject.avg_rating.toFixed(1)}
          </p>
          <Rating
            sx={{ fontSize: 20, color: "rgb(229, 152, 25)" }}
            name="half-rating-read"
            defaultValue={courseObject.avg_rating}
            precision={0.5}
            readOnly
          />
          <p>Course Rating</p>
        </div>
        <div className={styles["bars-container"]}>
          <FeedbackBars />
        </div>
      </div>
      <h2>Reviews</h2>
      <div>
        <form
          className={styles["search-form"]}
          onSubmit={(event) => {
            event.preventDefault();
            setReviewsFilter((reviewsFilter) => ({
              ...reviewsFilter,
              reviewsSearchQuery: inputValue,
            }));
          }}
        >
          <input
            className={styles["search-input"]}
            placeholder="Search reviews"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit" className={styles["search-icon"]}>
            <SearchIcon sx={{ color: "white" }} />
          </button>
        </form>
      </div>
      <div className={styles["container"]}>
        {reviews.results.map(
          (review, index) =>
            review.content
              .toLowerCase()
              .includes(reviewsFilter.reviewsSearchQuery.toLowerCase()) && (
              <Review key={index} review={review} />
            )
        )}
      </div>
    </section>
  );
}

export default Reviews;
