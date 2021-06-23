import { Link, useHistory } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import { GlobalContext } from "../GlobalContext/StateProvider";
import { Button } from "@material-ui/core";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";
import { toast } from "react-toastify";

function Payment() {
  const { currentUser, cart, totalCartItems, totalPrice, clearCart } =
    useContext(GlobalContext);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [address, setAddress] = useState("");
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${totalPrice * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);
  console.log("THE SECRET is >>>", clientSecret);
  const handleSubmit = async (event) => {
    // all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment = payment confirmation

        db.collection("users")
          .doc(currentUser?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            username: currentUser?.displayName,
            cart: cart,
            address: address,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
          toast.success('Order Placed Successfully!');
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        clearCart();
        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    // Listen for changes in the CardElement
    //and display any error as the customer types thier card details
    if(address !== ""){
      setDisabled(event.empty);
    }else{
      toast.error('Address must be filled before placing an order!!!');
    }
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/cart">{totalCartItems} items</Link>)
        </h1>
        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* <p>{currentUser?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p> */}
            <textarea className="address"  cols="30" rows="5" required onChange={(e)=>setAddress(e.target.value)}></textarea>
          </div>
        </div>
        {/* payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((curItem) => {
              return <CheckoutProduct key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>

        {/* payment section - Payment method */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value} /-</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹ "}
                />
                {/* <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button> */}
                <Button
                  disabled={processing || disabled || succeeded}
                  style={{
                    fontSize: 25,
                    width: '100%',
                    color: "var(--clr-white)",
                  }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </Button>
              </div>
              {/* Errors */}
              {error && <div className="card__error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
