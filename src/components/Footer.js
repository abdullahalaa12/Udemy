import React from "react";
import { Link } from "react-router-dom";
import styles from "../style_modules/Footer.module.css";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  const companiesLogos = [
    "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
  ];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-upper"]}>
        <h2 className={styles["promo"]}>
          Top companies choose <a>Udemy Business</a> to build in-demand career
          skills.
        </h2>
        <div className={styles["logos-container"]}>
          {companiesLogos.map((logo, index) => {
            return <img key={index} alt="Company logo" src={logo} />;
          })}
        </div>
      </div>
      <div className={styles["footer-lower"]}>
        <div className={styles["links-lang"]}>
          <ul className={styles["links"]}>
            <li>
              <a>Udemy Business</a>
            </li>
            <li>
              <a>Teach on Udemy</a>
            </li>
            <li>
              <a>Get the app</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
          <ul className={styles["links"]}>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Help and Support</a>
            </li>
            <li>
              <a>Affiliate</a>
            </li>
            <li>
              <a>Investors</a>
            </li>
          </ul>
          <ul className={styles["links"]}>
            <li>
              <a>Terms</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
            <li>
              <a>Cookie settings</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
            <li>
              <a>Accessibility statement</a>
            </li>
          </ul>
          <div>
            <button className={styles["lang"]}>
              <LanguageIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
              <span>English</span>
            </button>
          </div>
        </div>
        <div className={styles["logo-copyright"]}>
          <Link to="/Udemy">
            <img
              className={styles["udemy-logo"]}
              alt="Udemy logo"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            />
          </Link>
          <p>© 2022 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
