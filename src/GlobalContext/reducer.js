export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.cartItem],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    case "INCREASE_QUANTITY": {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
      return { ...state, cart: updatedCart };
    }
    case "DECREASE_QUANTITY": {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      }).filter((curElem)=>{
          return curElem.quantity !== 0
      });
      return { ...state, cart: updatedCart };
    }
    case "CLEAR_CART":
        return {...state, cart:[]}
    case "GET_TOTAL":
        {
            let {totalCartItems, totalPrice} = state.cart.reduce((accum, curVal)=>{
                let {quantity, price} = curVal;
                accum.totalCartItems += quantity;
                let updatedTotalPrice = price * quantity;
                accum.totalPrice += updatedTotalPrice;
                return accum;
            },{
                totalCartItems: 0,
                totalPrice: 0,
            });
            return {...state,totalCartItems, totalPrice}
        }

    default:
      return state;
  }
};
