import React from "react";
import styles from "../../style_modules/course_page/Header.module.css";

function Header(props) {
  /*title={courseObject.title}
        headline={courseObject.headline}
        rating={courseObject.avg_rating}
        num_reviews={courseObject.num_reviews}
        num_subscribers={courseObject.num_subscribers}
        instructors={courseObject.visible_instructors}
        last_update={courseObject.last_update_date}
        language={courseObject.locale}
        caption_languages={courseObject.caption_languages}
        context_info={courseObject.context_info}*/
  const { courseObject } = props;

  return (
    <header className={styles["header"]}>
      <p>
        {courseObject.context_info.category.title +
          " > " +
          courseObject.context_info.label.title}
      </p>
      <h1>{courseObject.title}</h1>
      <p>{courseObject.headline}</p>
      <div>{courseObject.avg_rating.toFixed(1)}</div>
      <p>
        {"(" +
          courseObject.num_reviews.toLocaleString("en-US") +
          " ratings" +
          ")"}
      </p>
      <p>
        {courseObject.num_subscribers.toLocaleString("en-US") + " students"}
      </p>
      <p>{"Created by " + courseObject.visible_instructors[0].display_name}</p>
      <div>
        <img alt="danger icon" src="" />
        <p>{"Last update " + courseObject.last_update_date}</p>
      </div>

      <div>
        <img alt="globe icon" src="" />
        <p>{courseObject.locale.simple_english_title}</p>
      </div>
      <div>
        <img alt="cc icon" src="" />
        <p>{courseObject.caption_languages[0]}</p>
      </div>
    </header>
  );
}

export default Header;
