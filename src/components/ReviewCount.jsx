import React, { useContext } from "react";
import ReviewContext from "../context/ReviewContext";

const ReviewCount = () => {
  const { feedbacks } = useContext(ReviewContext);
  const evg = feedbacks.reduce((p, c) => p + parseInt(c.rating), 0);

  return (
    <div className="d-flex justify-content-between">
      <p>Total Review : {feedbacks.length}</p>
      <p>Evg Rating : {evg}</p>
    </div>
  );
};

export default ReviewCount;
