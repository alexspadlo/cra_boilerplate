import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import PublicRoute from '../components/RouterComponents/PublicRoute/PublicRoute'
import PrivateRoute from '../components/RouterComponents/PrivateRoute/PrivateRoute'
import HomePage from '../components/HomePage/HomePage'
import Dashboard from '../components/Dashboard/Dashboard'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute
            exact
            path='/'
            component={HomePage}
          />
          <PrivateRoute
            exact
            path='/dashboard'
            component={Dashboard}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

export default App