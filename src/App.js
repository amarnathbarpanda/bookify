import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import Payment from "./pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders";

const promise = loadStripe(
  "pk_test_51J4tRbSH5MpBDULY5fre0UEnp9w5xNFoPqzFJ8TVwSEdNZKi3JQwIYKBnFeTCoCf8wefiypRdj5Tw9jxK5Gjlhbf00TY5s1BMX"
);
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/orders" component={Orders} />
          <PrivateRoute path="/category" component={CategoryPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/auth" component={AuthPage} />
          <PrivateRoute path="/cart" component={CartPage} />
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* <PrivateRoute path="/payment" component={Payment}/> */}
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
