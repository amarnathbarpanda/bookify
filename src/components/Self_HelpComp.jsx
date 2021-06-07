import React from 'react';
import { self_help } from '../Action';
import './Self_HelpComp.css';
import Card from './Card';
const Self_HelpComp = () => {
    return (
        <div className="selfhelp">
            {
                self_help   .map((item,index)=>{
                    return(
                        <Card key={index} img={item.img} title={item.title} author={item.author} price={item.price} rating={item.rating}/>
                    )
                })
            }
        </div>
    )
}

export default Self_HelpComp;
