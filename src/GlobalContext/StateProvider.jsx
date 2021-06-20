import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import books from "../data/books";
import { Fdata, pBook } from "../data/Fdata";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
export const GlobalContext = createContext();

const initialState = {
  item: books,
  facility: Fdata,
  popularBooks: pBook,
  cart: localCart,
  totalCartItems: 0,
  totalPrice: 0,
  currentUser: null,
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.item);
  // console.log(state.cart);
  // let localCart = localStorage.getItem(state.cart);
  const [loading, setLoading] = useState(true);

  const addToCart = (id, img, title, author, price, rating) => {
    if (state.currentUser !== null) {
      return dispatch({
        type: "ADD_TO_CART",
        cartItem: {
          id: id,
          img: img,
          title: title,
          author: author,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
    } else {
      return toast.error("You must be logged in before adding items to cart!");
    }
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const incQuantity = (id) => {
    return dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };
  const decQuantity = (id) => {
    return dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    localStorage.clear();
    // dispatch({ type: "GET_TOTAL" });
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        // console.log(user);
        setLoading(false);
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });

        setLoading(false);
      }
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    ...state,
    addToCart,
    removeItem,
    incQuantity,
    decQuantity,
    clearCart,
    signUp,
    logIn,
    logOut,
    resetPassword,
  };

  return (
    <GlobalContext.Provider value={value}>
      {!loading && children}
    </GlobalContext.Provider>
  );
};

export default StateProvider;
