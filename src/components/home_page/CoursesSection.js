import React, { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import styles from "../../style_modules/home_page/CoursesSectionStyles.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "react-grid-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/KeyboardArrowLeft";

const StyledTabs = styled((props) => <Tabs {...props} />)({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "16px",
    marginRight: "5px",
    color: "#6a6f73",
    padding: 0,
    flexShrink: 0,
    margin: "0px 10px",
    width: "auto",
    minWidth: "0px",
    "&.Mui-selected": {
      color: "black",
    },
    "&:hover": {
      color: "black",
    },
  })
);

const CoursesCardsContainer = (props) => {
  const { coursesData, searchQuery, category } = props;

  const courses = coursesData.items.map((courseObj) => {
    if (
      searchQuery &&
      !courseObj.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return null;
    return (
      <Carousel.Item>
        <CourseCard
          category={category}
          key={courseObj.id}
          courseObject={courseObj}
        />
      </Carousel.Item>
    );
  });

  return (
    <div
      hidden={props.tabsvalue != category}
      className={styles["courses-section"]}
    >
      <article className={styles["courses-tab-exp"]}>
        <h2 className={styles["courses-tab-title"]}>{coursesData.header}</h2>
        <p>{coursesData.description}</p>
        <a
          href="#"
          className={`${styles["white-button"]} ${styles["explore-btn"]}`}
        >
          {"Explore " + coursesData.title}
        </a>
      </article>
      <Carousel
        cols={5}
        rows={1}
        loop
        gap={0}
        mobileBreakpoint={600}
        responsiveLayout={[
          {
            breakpoint: 700,
            cols: 2,
          },
          {
            breakpoint: 980,
            cols: 3,
          },
          {
            breakpoint: 1200,
            cols: 4,
          },
        ]}
        arrowRight={
          <span className={styles["arrow-right"]}>
            <ArrowForwardIosIcon fontSize="large" />
          </span>
        }
        arrowLeft={
          <span className={styles["arrow-left"]}>
            <ArrowBackIosNewIcon fontSize="large" />
          </span>
        }
      >
        {courses}
        {/* <div className={styles["courses-container"]}>{courses}</div> */}
      </Carousel>
    </div>
  );
};

function CoursesSection(props) {
  const [tabsvalue, setValue] = React.useState(0);
  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  const LoadingSpinner = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  };

  const CardsContainer = () => {
    if (props.coursesData) {
      return (
        <>
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: "100%",
              bgcolor: "background.paper",
            }}
          >
            <StyledTabs
              value={tabsvalue}
              onChange={handleTabsChange}
              variant="scrollable"
              scrollButtons={true}
              aria-label="visible arrows tabs example"
            >
              {props.coursesData.courses.map((category) => (
                <StyledTab key={category.title} label={category.title} />
              ))}
            </StyledTabs>
          </Box>
          {props.coursesData.courses.map((courses, index) => (
            <CoursesCardsContainer
              tabsvalue={tabsvalue}
              category={index}
              key={index}
              coursesData={courses}
              searchQuery={props.searchQuery}
            />
          ))}
        </>
      );
    } else return <LoadingSpinner />;
  };

  return (
    <section className={styles["main"]}>
      <h1 className={styles["heading"]}>A broad selection of courses</h1>
      <p className={styles["promo"]}>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      <CardsContainer />
    </section>
  );
}

export default CoursesSection;
