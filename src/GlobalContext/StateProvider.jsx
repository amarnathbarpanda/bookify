import React, { createContext, useEffect, useReducer } from 'react';
import {reducer} from './reducer';
import books from '../data/books';
import {Fdata, pBook} from '../data/Fdata'

export const GlobalContext = createContext();

const initialState = {
    item: books,
    facility: Fdata,
    popularBooks: pBook,
    cart: [],
    totalCartItems: 0,
    totalPrice: 0,
}

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state.item);
    // console.log(state.cart);
    const addToCart = (id,img, title, author, price, rating) =>{
        return dispatch({
            type: 'ADD_TO_CART',
            cartItem: {
                id: id,
                img: img,
                title: title,
                author: author,
                price: price,
                rating: rating,
                quantity: 1
            }
        });
    }

    const removeItem = (id) =>{
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    }

    const incQuantity = (id) =>{
        return dispatch({
            type: 'INCREASE_QUANTITY',
            payload: id
        });
    }
    const decQuantity = (id) =>{
        return dispatch({
            type: 'DECREASE_QUANTITY',
            payload: id
        });
    }
    const clearCart = () =>{
        return dispatch({
            type: "CLEAR_CART"
        });
    }

    useEffect(() => {
        dispatch({ type: "GET_TOTAL"});
    }, [state.cart])

    return (
        <GlobalContext.Provider value={{...state, addToCart, removeItem, incQuantity, decQuantity, clearCart}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default StateProvider;
