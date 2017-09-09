import { combineReducers } from 'redux'
import { posts, postsHasErrored, postsIsLoading } from './posts'
import { post, postHasErrored, postIsLoading } from './post'

export default combineReducers({
    posts,
    postsHasErrored,
    postsIsLoading,
    post,
    postHasErrored,
    postIsLoading,
})
