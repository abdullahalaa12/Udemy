import React from "react";

function Reviews(props) {
  const { reviews } = props;

  return <div>{reviews.count}</div>;
}

export default Reviews;
