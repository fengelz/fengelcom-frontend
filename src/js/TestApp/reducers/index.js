import { combineReducers } from 'redux'
import { data, dataHasErrored, dataIsLoading } from './async'

export default combineReducers({
    data,
    dataHasErrored,
    dataIsLoading,
})
