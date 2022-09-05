import React from "react";
import styles from "../style_modules/NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles["navigation-bar"]}>
      <img
        alt="Hamburger menu"
        className={styles["ham-menu"]}
        src="https://cdn-icons-png.flaticon.com/512/566/566020.png"
      />
      <img
        className={styles["udemy-icon"]}
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt="Udemy"
      />
      <a
        href="#"
        className={`${styles["purple-hover"]} ${styles["nav-a"]} ${styles["center"]} ${styles["header-item"]}`}
      >
        Categories
      </a>
      <form className={styles["search-form"]}>
        <button className={styles["search-button"]} type="submit">
          <img
            alt="Search Icon"
            className={styles["search-icon"]}
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          />
        </button>
        <input
          className={styles["search-field"]}
          type="text"
          placeholder="Search for anything"
        />
      </form>
      {/* <div className={styles["nav-links"]}> */}
      <a
        href="#"
        className={`${styles["purple-hover"]} ${styles["nav-a"]} ${styles["center"]} ${styles["header-item"]} ${styles["udemy-buss"]}`}
      >
        Udemy Business
      </a>
      <a
        href="#"
        className={`${styles["purple-hover"]} ${styles["nav-a"]} ${styles["center"]} ${styles["header-item"]} ${styles["teach-udemy"]}`}
      >
        Teach on Udemy
      </a>
      <a
        href="#"
        className={`${styles["nav-a"]} ${styles["center"]} ${styles["header-item"]}`}
      >
        <img
          alt="Cart icon"
          src="https://www.pngitem.com/pimgs/m/177-1771991_shopping-cart-icon-png-for-kids-png-download.png"
          className={styles["cart-icon"]}
        />
      </a>
      <a
        href="#"
        className={`${styles["nav-a"]} ${styles["white-button"]} ${styles["center"]} ${styles["header-item"]}`}
      >
        Log in
      </a>
      <a
        href="#"
        className={`${styles["nav-a"]} ${styles["black-button"]} ${styles["center"]} ${styles["header-item"]}`}
      >
        Sign up
      </a>
      <a
        href="#"
        className={`${styles["nav-a"]} ${styles["white-button"]} ${styles["center"]} ${styles["header-item"]}`}
      >
        <img
          alt="Language icon"
          src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_language_48px-512.png"
          className={styles["cart-icon"]}
        />
      </a>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
