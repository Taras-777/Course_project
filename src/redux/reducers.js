import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((startup) => startup.startupId === action.payload.startupId)) {
        return state.map((startup) => {
          if (startup.startupId === action.payload.startupId) {
            let priceForOne = startup.price / startup.quantity;
            startup.quantity++;
            startup.price += priceForOne;
            return startup;
          }
          return startup;
        });
      }
      return [...state, action.payload];
    case "INCREMENT_QTY":
      return state.map((startup) => {
        if (startup.startupId === action.payload) {
          let priceForOne = startup.price / startup.quantity;
          startup.quantity++;
          startup.price += priceForOne;
          return startup;
        }
        return startup;
      });
    case "DECREMENT_QTY":
      return state.map((startup) => {
        if (startup.startupId === action.payload && startup.quantity >= 2) {
          let priceForOne = startup.price / startup.quantity;
          startup.quantity--;
          startup.price -= priceForOne;
          return startup;
        }
        return startup;
      });
    case "REMOVE_FROM_CART":
      return state.filter(startup => startup.startupId !== action.payload);
    default:
      return state;
  }
};

const allReducers = combineReducers({
  cart: cartReducer,
});

export default allReducers;
