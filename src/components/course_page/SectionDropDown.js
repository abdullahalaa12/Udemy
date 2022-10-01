import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import styles from "../../style_modules/course_page/SectionDropDown.module.css";

export default function NestedList(props) {
  const { data } = props;

  const [open, setOpen] = React.useState(props.expand);

  const handleClick = () => {
    setOpen(!open);
  };

  const Lectures = () => {
    return data.items.map((lecture, index) => (
      <ListItemButton key={index} className={styles["lecture"]}>
        <ListItemIcon>
          {lecture.icon_class.includes("play") ? (
            <PlayCircleFilledIcon className={styles["play-icon"]} />
          ) : (
            <InsertDriveFileOutlinedIcon className={styles["file-icon"]} />
          )}
        </ListItemIcon>
        <ListItemText
          primary={<p className={styles["lecture-title"]}>{lecture.title}</p>}
        />
        <ListItemText
          primary={
            <p className={styles["lecture-duration"]}>
              {lecture.content_summary}
            </p>
          }
        />
      </ListItemButton>
    ));
  };

  const convertSecondsToHours = (seconds) => {
    let minutes = Math.ceil(seconds / 60);
    let hours = Math.floor(minutes / 60);

    return hours > 0
      ? hours + "hr " + (minutes % 60) + "min"
      : (minutes % 60) + "min";
  };

  return (
    <List className={styles["container"]} component="div">
      <ListItemButton
        className={styles["section-header"]}
        onClick={handleClick}
      >
        {open ? (
          <ExpandLess className={styles["expand-icon"]} />
        ) : (
          <ExpandMore className={styles["expand-icon"]} />
        )}

        {/* //Text */}
        <ListItemText
          primary={<h3 className={styles["section-heading"]}>{data.title} </h3>}
        />
        <ListItemText
          primary={
            <p className={styles["section-duration"]}>
              {data.lecture_count +
                " lectures • " +
                convertSecondsToHours(data.content_length)}
            </p>
          }
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          className={styles["lectures-container"]}
          component="div"
          disablePadding
        >
          <Lectures />
        </List>
      </Collapse>
    </List>
  );
}
