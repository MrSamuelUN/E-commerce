export default function reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const ifProductExist = state.cart.find(
      (checkForProduct) => checkForProduct.id === action.payload.id
    );

    let updatedCart;

    if (ifProductExist) {
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item } : item
      );
    } else {
      updatedCart = [...state.cart, { ...action.payload }];
    }

    return {
      ...state,
      cart: updatedCart,
      totalPrice: updatedCart.reduce((total, item) => total + item.price, 0),
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const updatedCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload.id
    );

    return {
      ...state,
      cart: updatedCart,
      totalPrice: updatedCart.reduce((total, item) => total + item.price, 0),
    };
  }

  return state;
}
