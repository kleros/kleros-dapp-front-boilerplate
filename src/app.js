import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'
import Initializer from './bootstrap/initializer'
import Balance from './containers/balance'
import './app.css'

const App = ({ store, history }) => (
  <Provider store={store}>
    <Initializer>
      <ConnectedRouter history={history}>
        <div id="router-root">
          <Helmet>
            <title>Kleros Dapp</title>
          </Helmet>
          <Switch>
            <Route exact path="/" component={Balance} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Initializer>
  </Provider>
)

App.propTypes = {
  // State
  store: PropTypes.shape({}).isRequired,

  // Router
  history: PropTypes.shape({}).isRequired
}

export default App
