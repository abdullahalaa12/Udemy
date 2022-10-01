import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../style_modules/NavBar.module.css";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/",
      search: `?searchQuery=${searchQuery}`,
    });
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className={styles["navigation-bar"]}>
      <img
        alt="Hamburger menu"
        className={styles["ham-menu"]}
        src="https://cdn-icons-png.flaticon.com/512/566/566020.png"
      />
      <Link to="/Udemy">
        <img
          className={styles["udemy-icon"]}
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
        />
      </Link>
      <a
        href="#"
        className={`${styles["purple-hover"]} ${styles["nav-a"]} ${styles["center"]} ${styles["header-item"]}`}
      >
        Categories
      </a>
      <form onSubmit={handleFormSubmit} className={styles["search-form"]}>
        <button className={styles["search-button"]} type="submit">
          <img
            alt="Search Icon"
            className={styles["search-icon"]}
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          />
        </button>
        <input
          onChange={handleChange}
          value={searchQuery}
          className={styles["search-field"]}
          type="text"
          placeholder="Search for anything"
        />
      </form>
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
    </nav>
  );
}

export default NavBar;
