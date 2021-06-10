import React, { useContext } from "react";
import "./Card.css";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../GlobalContext/StateProvider";

const Card = ({ id,img, title, author, price, rating }) => {

  const {addToCart} = useContext(GlobalContext);

  const star = {
    fontSize: "4rem",
  };
  const buyBtn = {
    color: "var(--clr-primary-lt)",
    borderRadius: "1rem",
    background: "#ffffff",
  };
  const pdfBtn = {
    color: "var(--clr-accent)",
    borderRadius: "1rem",
    background: "#ffffff",
  };
  const btnIcon = {
    fontSize: 40,
  };
  const TextOnlyTooltip = withStyles({
    tooltip: {
      color: "var(--clr-white)",
      backgroundColor: "var(--clr-primary)",
      fontSize: 15,
    },
  })(Tooltip);

  return (
    <div className="card">
      <div className="card__wrapper">
        <img className="card__img" src={img} alt="" />
        <span className="book__title">
          <span>{title}</span>
        </span>
        <span className="book__author">
          <span>{author}</span>
        </span>

        <div className="price__rating">
          <span>Price:</span>
          <span>Rs. {price}/-</span>
        </div>
        <div className="price__rating">
          <span>Rating:</span>
          <Rating name="read-only" style={star} value={rating} readOnly />
        </div>
        <div className="card__buttons">
          <TextOnlyTooltip title="Add to Cart" placement="bottom" arrow>
            <Button style={buyBtn}>
              <AddShoppingCartRoundedIcon style={btnIcon} onClick={()=>addToCart(id,img, title, author, price, rating)}/>
            </Button>
          </TextOnlyTooltip>

          <TextOnlyTooltip title="Buy PDF" placement="bottom" arrow>
            <Button style={pdfBtn}>
              <PictureAsPdfRoundedIcon style={btnIcon} />
            </Button>
          </TextOnlyTooltip>
        </div>
      </div>
    </div>
  );
};

export default Card;
