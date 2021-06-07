import React from "react";
import "./Home.css";

function Home() {
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
        <button className="home__btn">Shop now</button>
        </div>
      </div>
      <div className="home__right">
        <img src="img/Vector.png" alt="reader_img" />
      </div>
    </div>
  );
}

export default Home;
