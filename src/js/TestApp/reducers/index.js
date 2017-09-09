import { combineReducers } from 'redux'
import { posts, post, dataHasErrored, dataIsLoading } from './async'

export default combineReducers({
    posts,
    post,
    dataHasErrored,
    dataIsLoading,
})
