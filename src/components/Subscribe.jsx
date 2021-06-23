import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Subscribe.css";
function Subscribe() {
  const [subscribe, setSubscribe] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribe("");
    toast.info("Thank You For Your Subscription !!");
  };
  return (
    <div className="subscribe">
      <h1 className="subs__title">
        Subscribe to our newsletter and you will get notified when a new book is
        released.
      </h1>
      <div className="subs__container">
        <div className="subs__left">
          <img src="img/New Message_Monochromatic.png" alt="" />
        </div>
        <div className="subs__right">
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Email address"
              onClick={(e) => setSubscribe(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
