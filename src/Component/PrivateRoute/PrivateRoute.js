import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth';

// private routing 

const PrivateRoute = ({children, ...rest}) => {
    const {users} = UseAuth();
    return (
        <Route
        {...rest}
        render={({location}) => users.email?children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;