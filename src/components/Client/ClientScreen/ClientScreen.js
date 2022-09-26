import React from "react";
import { Redirect, Route } from "react-router-dom";

const ClientScreen = ({ component: Component, ...rest }) => {
    return(
        <Route
          {...rest}
          render={
            (props) => 
            localStorage.getItem("client_id") ? 
            (<Component {...props} />)
            :
            (<Redirect to="/" />)
          }
        />
    )
}

export default ClientScreen;