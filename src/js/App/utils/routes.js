import React from 'react'
import { Route } from 'react-router-dom'
import { HomeContainer, AboutContainer, PostContainer, CategoryPostsContainer } from '.././containers'

const routes = (
    <Route path="/" component={HomeContainer}>
        <Route path="/about" component={AboutContainer} />
        <Route path="categories/:categoryId" component={CategoryPostsContainer} />
        <Route path="posts/:postId/:slug" component={PostContainer} />
    </Route>

)
export default routes
