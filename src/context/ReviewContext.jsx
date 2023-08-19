import { createContext, useReducer } from "react";
import ReviewReducer from "./ReviewReducer";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const initialState = {
    feedbacks: [
      //   { id: 1, rating: 1, review: "Good Product" },
      //   { id: 2, rating: 2, review: "Very Good Product!" },
    ],
    edit: { feedbacks: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(ReviewReducer, initialState);

  const saveReview = (newRating, newReview) => {
    const newFeedback = {
      id: crypto.randomUUID(),
      rating: newRating,
      review: newReview,
    };
    dispatch({
      type: "SAVE_REVIEW",
      payload: newFeedback,
    });
  };

  const deleteReview = (id) => {
    dispatch({
      type: "DELETE_REVIEW",
      payload: id,
    });
  };

  const editReview = (feedbacks) => {
    dispatch({
      type: "EDIT_REVIEW",
      payload: feedbacks,
    });
  };

  const updateReview = (oldId, newRating, newReview) => {
    const updatedReview = {
      id: oldId,
      rating: newRating,
      review: newReview,
    };
    dispatch({
      type: "UPDATE_REVIEW",
      payload: updatedReview,
    });
  };

  return (
    <ReviewContext.Provider
      value={{
        feedbacks: state.feedbacks,
        edit: state.edit,
        saveReview,
        deleteReview,
        editReview,
        updateReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
