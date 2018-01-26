import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import configureStore from './store/configureStore'
import { HomeContainer, AboutContainer, PostContainer, CategoryPostsContainer } from './containers'
import { Master } from './components/'

const store = configureStore()

const App = () => (
    <Provider store={store} >
        <Router>
            <Master>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about" component={AboutContainer} />
                    <Route path="/categories/:categoryId" component={CategoryPostsContainer} />
                    <Route path="/posts/:postId/:slug" component={PostContainer} />
                </Switch>
            </Master>
        </Router>
    </Provider>
)

export default App
