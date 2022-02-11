export const addToCart = (startup) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      startupId: startup.id,
      startupName: startup.name,
      price: startup.entranceFee,
      quantity: 1,
    },
  };
};

export const increment = (startupId) => {
  return { type: "INCREMENT_QTY", payload: startupId };
};

export const decrement = (startupId) => {
  return { type: "DECREMENT_QTY", payload: startupId };
};

export const remove = (startupId) => {
  return { type: "REMOVE_FROM_CART", payload: startupId };
};
