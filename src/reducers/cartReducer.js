const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.emoji];

    case "REMOVE":
      return state;

    default:
      return state;
  }
};

export const addToCart = (emoji) => {
  console.log(emoji);
  return {
    type: "ADD",
    emoji,
  };
};

export default cartReducer;
