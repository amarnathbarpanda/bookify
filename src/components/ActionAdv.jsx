import React from 'react';
import { Action } from '../Action';
import './ActionAdv.css';
import Card from './Card';
const ActionAdv = () => {
    return (
        <div className="action">
            {
                Action.map((item,index)=>{
                    return(
                        <Card key={index} img={item.img} title={item.title} author={item.author} price={item.price} rating={item.rating}/>
                    )
                })
            }
        </div>
    )
}

export default ActionAdv;
