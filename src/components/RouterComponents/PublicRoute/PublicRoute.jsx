import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            restricted ? 
            <Redirect to='/' /> // redirect for a real not restricted path
            : <Component {...rest} {...props}/>
        )} />
    )
}

export default PublicRoute