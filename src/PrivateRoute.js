import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom'; 
import { GlobalContext } from './GlobalContext/StateProvider';

const PrivateRoute = ({ component: Component, ...rest}) => {
    
    const {currentUser} = useContext(GlobalContext);

    return (
        <Route {...rest} render={props =>{
            return currentUser !== null ? <Component {...props}/> : <Redirect to="/"/> 
        }}>
            
        </Route>
    )
}

export default PrivateRoute;
