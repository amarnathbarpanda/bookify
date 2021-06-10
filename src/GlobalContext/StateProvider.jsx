import React, { createContext, useReducer } from 'react';
import {reducer} from './reducer';
import books from '../data/books';
import {Fdata, pBook} from '../data/Fdata'

export const GlobalContext = createContext();

const initialState = {
    item: books,
    facility: Fdata,
    popularBooks: pBook,
    cart: []
}

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
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
            }
        });
    }

    return (
        <GlobalContext.Provider value={{...state, addToCart}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default StateProvider;
