import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Authentication from "./pages/Authentication";
import Contact from "./pages/Contact";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import PopularBooks from "./components/PopularBooks";
import Subscribe from "./components/Subscribe";
import Category from "./pages/Category";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/category">
            <Category/>
            <Footer/>
          </Route>
          <Route path="/about">
           <About/>
           <Footer/>
          </Route>
          <Route path="/contact">
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/auth">
            <Authentication/>
            <Footer/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <Home />
            <Facilities />
            <PopularBooks />
            <Subscribe/>
            <Footer/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
};

export default App;
