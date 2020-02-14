import {
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  CLEAR_CART,
  ADD_TO_CART
} from "./actions";

export default (state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    case INCREASE_AMOUNT:
      return state.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    case DECREASE_AMOUNT:
      return state.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      );
    case ADD_TO_CART:
      return state.concat(action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
