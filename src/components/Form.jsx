import React, { useContext, useEffect, useState } from "react";
import ReviewContext from "../context/ReviewContext";
import { toast } from "react-toastify";

const Form = () => {
  const { saveReview, edit, updateReview } = useContext(ReviewContext);

  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateReview(edit.feedbacks.id, rating, review);
      toast.success("Feedback Updated");
    } else {
      saveReview(rating, review);
      toast.success("Feedback Save");
    }
    setRating("");
    setReview("");
  };

  useEffect(() => {
    setRating(edit.feedbacks.rating);
    setReview(edit.feedbacks.review);
  }, [edit]);

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <select
        className="form-select"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
        required
      >
        <option value="rating">Choose an rating...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        className="form-control my-2"
        placeholder="Enter Your Review..."
        onChange={(e) => setReview(e.target.value)}
        value={review}
        required
      ></textarea>
      <button className="btn btn-success w-100">Save Review</button>
    </form>
  );
};

export default Form;
