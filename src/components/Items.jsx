import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/StateProvider";

const Items = ({ id, img, title, author, price, quantity }) => {
  const { removeItem, incQuantity, decQuantity } = useContext(GlobalContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="book" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decQuantity(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={() => incQuantity(id)}></i>
        </div>
        <div className="price">
          <h3>₹ {price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
