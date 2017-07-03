import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, history } from 'react-router-dom'

import configureStore from './store/configureStore'
import { HomeContainer, AboutContainer } from './containers'

const store = configureStore()

const TestApp = () => (
    <Provider store={store} >
        <Router history={history}>
            <Route
                render={() => (
                    <div>
                        <Route exact path="/" component={HomeContainer} />
                        <Route path="/about" component={AboutContainer} />
                    </div>
                )}
            />
        </Router>
    </Provider>
)

export default TestApp
