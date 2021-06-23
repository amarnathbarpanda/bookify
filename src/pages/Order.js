import moment from 'moment';
import React from 'react';
import './order.css';
import CheckoutProduct from '../components/CheckoutProduct';
import CurrencyFormat from "react-currency-format";

const Order = ({order}) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p>Name : {order.data.username}</p>
            <p>Address : {order.data.address}</p>
            <p className="order__id">
               Order ID : {order.id}
            </p>
            {order.data.cart?.map((item,index)=>{
                return <CheckoutProduct
                    key={index}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    author={item.author}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            })}
            <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value} /-</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={order.data.amount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹ "}
                />
        </div>
    )
}

export default Order;
