import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function CoursePage(props) {
  const { coursesData } = props;
  const { courseId } = useParams();

  return (
    <div>
      {coursesData.contents[courseId]?.details.description ?? <PageNotFound />}
    </div>
  );
}

export default CoursePage;
