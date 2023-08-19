import React, { useContext } from "react";
import ListItem from "./ListItem";
import ReviewContext from "../context/ReviewContext";

const ListGroup = () => {
  const { feedbacks, deleteReview, editReview } = useContext(ReviewContext);

  return (
    <ul className="list-group">
      {feedbacks.map((feedback) => (
        <ListItem
          key={feedback.id}
          feedback={feedback}
          deleteReview={deleteReview}
          editReview={editReview}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
