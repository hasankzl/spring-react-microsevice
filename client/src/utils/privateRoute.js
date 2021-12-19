import React from "react"
import { Redirect, Route } from "react-router-dom"
import { ACCESS_TOKEN } from "./constants"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            const hasToken = !!localStorage[ACCESS_TOKEN]

            return hasToken ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }}
    />
)

PrivateRoute.defaultProps = {
    component: null,
    location: "/"
}

export default PrivateRoute;