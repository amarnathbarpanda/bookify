import React, { useState } from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import {Badge,makeStyles} from "@material-ui/core";
import Toggle from "./Toggle";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 12,
    fontWeight: 600,
    marginTop: 1.5
  }
}));
const Header = () => {
  const user = {
    fontSize: "3rem",
    color: "var(--clr-primary)",
    margin: "0 1rem",
  };
  const cart = {
    fontSize: "3rem",
    color: "var(--clr-primary)",
  };
  const [hamMenu, setToggle] = useState(false);
  const [togglebtn, setToggleBtn] = useState(false);
  const toggleButton = () => {
    setToggle(!hamMenu);
    setToggleBtn(!togglebtn);
  };

  
  const classes = useStyles();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">
          <span className="booki">Booki</span>
          <span className="fy">Fy</span>
        </div>
      </Link>

      <div className="toggle__button" onClick={toggleButton}>
        {!togglebtn ? (
          <Toggle />
        ) : (
          <CloseRoundedIcon
            style={{
              fontSize: 30,
              color: "var(--clr-primary)",
              marginTop: "-0.7rem",
            }}
          />
        )}
      </div>
      <div
        id="hamburger"
        className={hamMenu ? "header__nav active" : "header__nav"}
      >
        <NavLink
          activeClassName="nav__active"
          exact
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setToggle(!hamMenu);
            setToggleBtn(!togglebtn);
          }}
        >
          <div className="nav__options">
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="nav__active"
          exact
          to="/category"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setToggle(!hamMenu);
            setToggleBtn(!togglebtn);
          }}
        >
          <div className="nav__options">
            <span>Category</span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="nav__active"
          exact
          to="/about"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setToggle(!hamMenu);
            setToggleBtn(!togglebtn);
          }}
        >
          <div className="nav__options">
            <span>About</span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="nav__active"
          exact
          to="/contact"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setToggle(!hamMenu);
            setToggleBtn(!togglebtn);
          }}
        >
          <div className="nav__options">
            <span>Contact</span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="nav__active"
          exact
          style={{ textDecoration: "none" }}
          to="/signin"
          onClick={() => {
            setToggle(!hamMenu);
            setToggleBtn(!togglebtn);
          }}
        >
          <div className="nav__options">
            <span>Sign In</span>
          </div>
        </NavLink>
      </div>
      <div className="other_options">
        <AccountCircleIcon style={user} />
        <Link style={{ textDecoration: "none" }} to="/cart">
          <Badge classes={{ badge: classes.badge }} badgeContent={5} color="secondary">
            <ShoppingCartRoundedIcon style={cart} />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;