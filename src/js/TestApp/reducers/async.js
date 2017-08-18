export function dataHasErrored(state = false, action) {
    switch (action.type) {
        case 'DATA_HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function data(state = { isLoading: true }, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return Object.assign({}, state, action.data)

        default:
            return state
    }
}
