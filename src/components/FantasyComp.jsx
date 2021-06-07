import React from 'react';
import { Fantasy } from '../Action';
import './FantasyComp.css';
import Card from './Card';
const FantasyComp = () => {
    return (
        <div className="fantasy">
            {
                Fantasy.map((item,index)=>{
                    return(
                        <Card key={index} img={item.img} title={item.title} author={item.author} price={item.price} rating={item.rating}/>
                    )
                })
            }
        </div>
    )
}

export default FantasyComp;
