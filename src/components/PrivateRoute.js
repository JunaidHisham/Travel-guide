import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const location = useLocation();

    return (
        <Route
            {...rest}
            render={(props) => {
                if (userData?.access) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={{ pathname: "/auth/login", search:`?next=${location.pathname}` }} />;
                }
            }}
        />
    );
}

export default PrivateRoute;
