import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, history, Switch } from 'react-router-dom'

import configureStore from './store/configureStore'
import { HomeContainer, AboutContainer, PostContainer } from './containers'

const store = configureStore()

const TestApp = () => (
    <Provider store={store} >
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={AboutContainer} />
                <Route path="/blog/:postId/:slug" component={PostContainer} />
            </Switch>
        </Router>
    </Provider>
)

export default TestApp
