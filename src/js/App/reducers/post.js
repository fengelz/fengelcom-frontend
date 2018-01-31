export function postHasErrored(state = false, action) {
    switch (action.type) {
        case 'POST_HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }
}

export function postIsLoading(state = true, action) {
    switch (action.type) {
        case 'POST_IS_LOADING':
            return action.isLoading
        default:
            return state
    }
}

export function post(state = { isLoading: true }, action) {
    switch (action.type) {
        case 'POST_IS_LOADING':
            return Object.assign({}, state, {
                isLoading: true,
                data: {},
            })
        case 'FETCH_POST_SUCCESS':
            return Object.assign({}, state, {
                isLoading: false,
                data: action.post,
            })

        default:
            return state
    }
}
