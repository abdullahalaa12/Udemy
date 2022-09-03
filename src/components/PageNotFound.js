import React from "react";
import styles from "../style_modules/PageNotFound.module.css";

function PageNotFound() {
  return (
    <main className={styles["main"]}>
      <img
        alt="Page not found"
        src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
      />
      <h1 className={styles["heading"]}>
        We can’t find the page you’re looking for
      </h1>
      <p className={styles["paragraph"]}>
        Visit our <a href="#">support page</a> for further assistance.
      </p>
    </main>
  );
}

export default PageNotFound;
