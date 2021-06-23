import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/StateProvider";
import "./CheckoutProduct.css";
import Rating from "@material-ui/lab/Rating";
import { Button } from "@material-ui/core";


function CheckoutProduct({ id, img, title, author, price, rating ,hideButton}) {
    const {removeItem,cart} = useContext(GlobalContext);

    const subBtn = {
      fontSize: 16,
      color: "var(--clr-white)",
    };
  return (
    <div className="checkoutProduct">
      <img src={img} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__author">{author}</p>
        <p className="checkoutProduct__price">
          <strong>₹</strong>
          <strong> {price}/-</strong>
        </p>
        <div className="checkoutProduct__rating">
        <Rating name="read-only" style={{fontSize: '4rem'}} value={rating} readOnly />
        </div>
        {!hideButton && (<Button
              style={subBtn}
              variant="contained"
              color="secondary"
              onClick={()=> removeItem(id)}
            >
              Remove from Cart
            </Button> )}
        
      </div>
    </div>
  );
}

export default CheckoutProduct;
