import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../GlobalContext/StateProvider";

function Home() {

  const {currentUser} = useContext(GlobalContext);

  return (
    <div className="home">
      <div className="home__left">
        <div className="home__container">
          <h1 className="home__heading">Take a Look,</h1>
          <h1 className="home__heading">Read a Book.</h1>
          <p className="home__para">
            Reading keeps your mind active, strong and healthy. A person will
            never feel bored or lonely, if he/she developes good reading habit.
          </p>
          <Link to="/category">
            <button
              onClick={() => {
                if (currentUser === null)
                  toast.error("You must be logged in before shopping!!");
              }}
              className="home__btn"
            >
              Shop now
            </button>
          </Link>
        </div>
      </div>
      <div className="home__right">
        <img src="img/Vector.png" alt="reader_img" />
      </div>
    </div>
  );
}

export default Home;
