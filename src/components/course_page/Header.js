import React from "react";
import styles from "../../style_modules/course_page/Header.module.css";

function Header(props) {
  return (
    <header className={styles["header"]}>
      <p>
        {props.context_info.category.title +
          " > " +
          props.context_info.label.title}
      </p>
      <h1>{props.title}</h1>
      <p>{props.headline}</p>
      <div>{props.rating.toFixed(1)}</div>
      <p>
        {"(" + props.num_reviews.toLocaleString("en-US") + " ratings" + ")"}
      </p>
      <p>{props.num_subscribers.toLocaleString("en-US") + " students"}</p>
      <p>{"Created by " + props.instructors[0].display_name}</p>
      <div>
        <img alt="danger icon" src="" />
        <p>{"Last update " + props.last_update}</p>
      </div>

      <div>
        <img alt="globe icon" src="" />
        <p>{props.language.simple_english_title}</p>
      </div>
      <div>
        <img alt="cc icon" src="" />
        <p>{props.caption_languages[0]}</p>
      </div>
    </header>
  );
}

export default Header;
