import { combineReducers } from 'redux'
import { posts, postsHasErrored, postsIsLoading } from './posts'
import { post, postHasErrored, postIsLoading } from './post'
import { categories, categoriesHasErrored, categoriesIsLoading } from './categories'

export default combineReducers({
    posts,
    postsHasErrored,
    postsIsLoading,
    post,
    postHasErrored,
    postIsLoading,
    categories,
    categoriesHasErrored,
    categoriesIsLoading,
})
