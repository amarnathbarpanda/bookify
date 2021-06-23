import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { db } from '../firebase';
import { GlobalContext } from '../GlobalContext/StateProvider';
import './Orders.css';
import Order from './Order';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const Orders = () => {
    const history = useHistory();
    
    const {currentUser} = useContext(GlobalContext);

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        if(currentUser !== null){

            db.collection('users')
                .doc(currentUser?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot( snapshot =>{
                    setOrders( snapshot.docs.map(doc =>({
                        id: doc.id,
                        data: doc.data()
                    })))
                    
                })
        }else{
            setOrders([]);
        }
    },[currentUser])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map((order,index)=> {
                    return <Order  key={index} order={order}/>
                })}
            </div>
            <div className="continueShopping">
            <Button style={{fontSize: 20}} onClick={()=> history.push('/category')} color="secondary" variant="contained" >
            Continue Shopping
          </Button>
            </div>
        </div>
    )
}

export default Orders;
