import React from "react";
import styles from "../../style_modules/home_page/HomeHeader.module.css";

function HomeHeader() {
  return (
    <section className={styles["header"]}>
      <img
        className={styles["responsive-img"]}
        src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_responsive_udlite/cd0b820f-6389-4ff0-87e2-bb5a90690545.jpg"
      />
      <img
        className={styles["original-img"]}
        src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg"
      />
      <div className={styles["offer-container"]}>
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
    </section>
  );
}

export default HomeHeader;
