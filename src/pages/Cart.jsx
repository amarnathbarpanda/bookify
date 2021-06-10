import React, { useContext } from "react";
import "./Cart.css";
import Scrollbars from "react-custom-scrollbars-2";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Items from "../components/Items";
import { GlobalContext } from "../GlobalContext/StateProvider";
import CurrencyFormat from "react-currency-format";

const Cart = () => {
  const { cart, clearCart, totalCartItems, totalPrice } =
    useContext(GlobalContext);

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
            You have{" "}
            <span className="total-items-count"> {totalCartItems} </span>
            items in your cart
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
            <CurrencyFormat
              renderText={(value) => (
                <>
                <h3>
                  Cart Total : <span>{value}</span>
                </h3>;
                </>
              )}
              decimalScale={2}
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹ "}
            />

            <Button style={subBtn} variant="contained" color="primary">
              Checkout
            </Button>
            <Button
              className="clear-cart"
              style={subBtn}
              variant="contained"
              color="secondary"
              onClick={() => clearCart()}
            >
              Clear Cart
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
