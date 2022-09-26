import React from "react";
import { Redirect, Route } from "react-router-dom";

const AdminScreen = ({ component: Component, ...rest }) => {
    return(
        <Route
          {...rest}
          render={
            (props) => 
            localStorage.getItem("admin_id") ? 
            (<Component {...props} />)
            :
            (<Redirect to="/admin/login" />)
          }
        />
    )
}

export default AdminScreen;