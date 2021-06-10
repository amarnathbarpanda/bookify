import React, { useContext } from "react";
import "./Cart.css";
import Scrollbars from "react-custom-scrollbars-2";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Items from '../components/Items';
import { GlobalContext } from "../GlobalContext/StateProvider";

const Cart = () => {

    const {cart} = useContext(GlobalContext);

    const subBtn = {
        fontSize: 20,
        color: "var(--clr-white)",
      };
  return (
    <>
      <div className="cart__wrapper">
        <header>
        <Link to="/category">
          <div className="continue-shopping">
            <img src="img/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </div>
          </Link>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count"> {cart.length} </span>items in your cart
          </p>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {cart.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              Cart Total : <span>2200rs</span>
            </h3>
            <Button style={subBtn} variant="contained" color="primary">
              Checkout
            </Button>
            <Button className="clear-cart" style={subBtn} variant="contained" color="secondary">
              Clear Cart
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
