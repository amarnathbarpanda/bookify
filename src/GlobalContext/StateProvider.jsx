import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
// import books from "../data/books";
import { Fdata, pBook } from "../data/Fdata";
import { auth, db, provider } from "../firebase";
import { toast } from "react-toastify";

const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
export const GlobalContext = createContext();

const initialState = {
  item: [],
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
  const [loading, setLoading] = useState(true);
  const ref = db.collection('books').orderBy('id','asc');

  const getBooks = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
      const items = [];
      querySnapshot.forEach((doc) =>{
        let p = doc.data();
        items.push(p);
      });
      console.log(items);
      dispatch({
        type: 'GET_BOOKS',
        payload: items
      })
      // setBooks(items);
      setLoading(false);
    });
}
  const addToCart = (id, img, title, author, price, rating) => {
    if (state.currentUser !== null) {
      return (dispatch({
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
      }),
      dispatch({ type: "GET_TOTAL" }));
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

  function signInWithGoogle() {
    auth.signInWithPopup(provider).catch((error) => toast.error(error.message));
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    getBooks();
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
    signInWithGoogle
  };

  return (
    <GlobalContext.Provider value={value}>
      {!loading && children}
    </GlobalContext.Provider>
  );
};

export default StateProvider;
