import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../components/Card";
import "./PopularBooks.css";
import {GlobalContext} from '../GlobalContext/StateProvider';

const PopularBooks = () => {

  const {popularBooks} = useContext(GlobalContext);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="popular">
        <h1 className="popular__head">Popular Books</h1>
      <div className="popular__container">
        <Carousel breakPoints={breakPoints}>
        {
          popularBooks.map((items)=>{
            {/* console.log(items.id); */}
            return(
            <Card key={items.id} id={items.id} img={items.img} title={items.title} author={items.author} price={items.price} rating={items.rating} altText={items.altText}/>
            )})
        }
          
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBooks;
