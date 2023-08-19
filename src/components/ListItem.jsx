import React from "react";
import { toast } from "react-toastify";

const ListItem = ({ feedback, deleteReview, editReview }) => {
  const handleDelete = () => {
    deleteReview(feedback.id);
    toast.error("Feedback Deleted!");
  };

  const handleEdit = () => {
    editReview(feedback);
    toast.warning("Feedback Edit!");
  };

  return (
    <li className="list-group-item">
      <h1 className="display-5">Rating : {feedback.rating}</h1>
      <h2 className="display-6">Review : {feedback.review}</h2>
      <button className="btn btn-danger float-end" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-warning float-end mx-2" onClick={handleEdit}>
        Edit
      </button>
    </li>
  );
};

export default ListItem;
