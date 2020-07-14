import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogIn } from '../../../utils'

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogIn() ?
            <Component {...rest} {...props}/>
            : <Redirect to='/' />
        )} />
    )
}

export default PrivateRoute