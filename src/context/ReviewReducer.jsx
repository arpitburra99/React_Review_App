const ReviewReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_REVIEW":
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
      };
    case "DELETE_REVIEW":
      return {
        ...state,
        feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
      };
    case "EDIT_REVIEW":
      return {
        ...state,
        edit: { feedbacks: action.payload, isEdit: true },
      };
    case "UPDATE_REVIEW":
      return {
        ...state,
        feedbacks: state.feedbacks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                rating: action.payload.rating,
                review: action.payload.review,
              }
            : item
        ),
        edit: { feedbacks: {}, isEdit: false },
      };
  }
};

export default ReviewReducer;
