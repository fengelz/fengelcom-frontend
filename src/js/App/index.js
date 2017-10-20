import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, history, Switch } from 'react-router-dom'

import configureStore from './store/configureStore'
import { HomeContainer, AboutContainer, PostContainer } from './containers'
import { Master } from './components/'

const store = configureStore()

const App = () => (
    <Provider store={store} >
        <Router history={history}>
            <Master>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/about" component={AboutContainer} />
                    <Route path="/:postId/:slug" component={PostContainer} />
                </Switch>
            </Master>
        </Router>
    </Provider>
)

export default App
