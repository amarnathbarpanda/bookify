import React, { useContext, useState } from "react";
import "./Header.css";
import { toast, ToastContainer } from "react-toastify";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Badge, makeStyles } from "@material-ui/core";
import Toggle from "./Toggle";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/StateProvider";
import UserIcon from './UserIcon';

const useStyles = makeStyles(() => ({
  badge: {
    fontSize: 12,
    fontWeight: 600,
    marginTop: 10,
  },
}));
const Header = () => {
  const { totalCartItems, currentUser } = useContext(GlobalContext);

  
  const cartIcon = {
    fontSize: "3rem",
    color: "var(--clr-primary)",
    margin: '1.4rem 0 1.4rem 1.4rem'
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
          to='/category'
          style={{ textDecoration: "none" }}
          onClick={() => {
            if(currentUser === null)
              toast.error("You must log in to visit Category Page!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
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
        {currentUser === null ? (
          <NavLink
            activeClassName="nav__active"
            exact
            style={{ textDecoration: "none" }}
            to="/auth"
            onClick={() => {
              setToggle(!hamMenu);
              setToggleBtn(!togglebtn);
            }}
          >
            <div className="nav__options">
              <span>Sign In</span>
            </div>
          </NavLink>
        ) : (
          <></>
        )}
      </div>
      <div className="other_options">
        {currentUser !== null ? (
          <UserIcon/>
        ) : (
          <></>
        )}
        <Link style={{ textDecoration: "none" }} to="/cart">
          <Badge
            classes={{ badge: classes.badge }}
            badgeContent={totalCartItems}
            color="secondary"
          >
            {currentUser !== null ? (<ShoppingCartRoundedIcon  style={cartIcon} />):(<ShoppingCartRoundedIcon onClick={()=>
              toast.error('You must be logged in to visit your Cart ')
            } style={cartIcon} />)}
          </Badge>
        </Link>
        <ToastContainer style={{ fontSize: "4rem", fontFamily: 'var(--ff-para)' }}/>
      </div>
    </div>
  );
};

export default Header;
